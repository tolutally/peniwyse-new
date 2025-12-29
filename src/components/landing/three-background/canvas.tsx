'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { vertexShader, fragmentShader } from './shaders';

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const trackersContainerRef = useRef<HTMLDivElement>(null);
  const svgLinesRef = useRef<SVGSVGElement>(null);
  const trackerBlobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !trackersContainerRef.current || !svgLinesRef.current || !trackerBlobRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 22);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvasRef.current.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    mainGroup.position.x = window.innerWidth < 768 ? 0 : 4.0;
    scene.add(mainGroup);

    const geometry = new THREE.SphereGeometry(4.5, 96, 96);
    const uniforms = {
      uTime: { value: 0 },
      uDistortion: { value: 0.5 },
      uSize: { value: 3.5 },
      uSpread: { value: 0.0 },
      uColor: { value: new THREE.Color('#4338ca') },
      uOpacity: { value: 0.9 },
      uMouse: { value: new THREE.Vector2(0, 0) }
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending
    });

    const particleMesh = new THREE.Points(geometry, material);
    mainGroup.add(particleMesh);

    const techGroup = new THREE.Group();
    mainGroup.add(techGroup);

    const orbits: any[] = [];
    function createOrbit(radius: number, type = 'thin', tiltX = 0, tiltY = 0, speed = 1.0) {
      let geo, mat;
      let opacity = 0.5;
      if (type === 'thin') {
        geo = new THREE.TorusGeometry(radius, 0.006, 6, 120);
        mat = new THREE.MeshBasicMaterial({ color: 0x171717, transparent: true, opacity });
      } else if (type === 'dotted') {
        const pts = [];
        const count = 64;
        for (let i = 0; i < count; i++) {
          const theta = (i / count) * Math.PI * 2;
          pts.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
        }
        geo = new THREE.BufferGeometry().setFromPoints(pts);
        mat = new THREE.PointsMaterial({ color: 0x171717, size: 0.03, transparent: true, opacity });
      } else if (type === 'dashed') {
        geo = new THREE.RingGeometry(radius, radius + 0.02, 64, 1);
        mat = new THREE.MeshBasicMaterial({ color: 0x171717, transparent: true, opacity: opacity * 0.5, side: THREE.DoubleSide });
      }
      const mesh = type === 'dotted' ? new THREE.Points(geo, mat as THREE.PointsMaterial) : new THREE.Mesh(geo, mat as THREE.MeshBasicMaterial);
      mesh.rotation.x = tiltX;
      mesh.rotation.y = tiltY;
      techGroup.add(mesh);
      orbits.push({
        mesh,
        baseOpacity: opacity,
        speedVector: new THREE.Vector3(
          (Math.random() - 0.5) * 0.01 * speed,
          (Math.random() - 0.5) * 0.01 * speed,
          (Math.random() - 0.5) * 0.01 * speed
        )
      });
    }

    createOrbit(5.8, 'thin', Math.PI / 2, 0, 1.5);
    createOrbit(6.2, 'dotted', Math.PI / 3, Math.PI / 6, 0.8);
    createOrbit(5.2, 'thin', 0, Math.PI / 2, 2.0);
    createOrbit(6.8, 'dashed', Math.PI / 1.5, Math.PI / 4, 0.5);
    createOrbit(7.5, 'thin', Math.PI / 4, 0, 0.6);

    const r = 4.5;
    const trackingPoints = [
      { pos: new THREE.Vector3(0, r * 0.6, r * 0.5), label: 'USDC', el: null as HTMLDivElement | null },
      { pos: new THREE.Vector3(-r * 0.5, -r * 0.2, r * 0.6), label: 'USDT', el: null as HTMLDivElement | null },
      { pos: new THREE.Vector3(r * 0.5, -r * 0.4, r * 0.5), label: 'CADC', el: null as HTMLDivElement | null }
    ];

    trackingPoints.forEach((point) => {
      const div = document.createElement('div');
      div.className = 'point-marker';
      div.innerHTML =
        '<div class="point-dot"></div>' +
        '<div class="point-corner pc-tl"></div>' +
        '<div class="point-corner pc-br"></div>' +
        '<div class="point-label">' + point.label + '</div>';
      trackersContainerRef.current?.appendChild(div);
      point.el = div;
    });

    const lines: any[] = [];
    const pairs = [[0, 1], [1, 2], [2, 0]];
    pairs.forEach(pair => {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('class', pair[0] === 0 ? 'svg-line active' : 'svg-line');
      svgLinesRef.current?.appendChild(line);
      lines.push({ el: line, p1: pair[0], p2: pair[1] });
    });

    let time = 0;
    let flowSpeed = 0.15;
    let orbitSpeedMult = 1.0;
    let orbitVisMult = 0.7;
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    const tempVec = new THREE.Vector3();

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      uniforms.uMouse.value.set(mouseX, mouseY);
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      mainGroup.position.x = window.innerWidth < 768 ? 0 : 4.0;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01 * flowSpeed * 3.0;

      particleMesh.rotation.y += 0.003;
      particleMesh.rotation.z = Math.sin(time * 0.2) * 0.05;

      orbits.forEach((orbit, i) => {
        const speed = orbit.speedVector.clone().multiplyScalar(orbitSpeedMult * 2.0);
        orbit.mesh.rotation.x += speed.x;
        orbit.mesh.rotation.y += speed.y;
        orbit.mesh.rotation.z += speed.z;
        orbit.mesh.rotation.x += Math.sin(time * 0.5 + i) * 0.001 * orbitSpeedMult;
        orbit.mesh.rotation.y += Math.cos(time * 0.3 + i) * 0.001 * orbitSpeedMult;
        if (orbit.mesh.material) {
          orbit.mesh.material.opacity = orbit.baseOpacity * orbitVisMult;
          orbit.mesh.visible = orbit.mesh.material.opacity > 0.01;
        }
      });

      const scrollY = window.scrollY;
      mainGroup.position.y = (Math.sin(time * 0.5) * 0.2) + (scrollY * 0.002);
      if (window.innerWidth < 768) {
        mainGroup.position.y += 1.5;
        mainGroup.position.y -= (scrollY * 0.005);
      }

      targetRotationY = mouseX * 0.3;
      targetRotationX = mouseY * 0.2;
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.08;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.08;

      const screenPoints: any[] = [];
      trackingPoints.forEach((pt) => {
        tempVec.copy(pt.pos);
        tempVec.applyEuler(particleMesh.rotation);
        tempVec.applyMatrix4(particleMesh.matrix);
        tempVec.applyMatrix4(mainGroup.matrixWorld);
        tempVec.project(camera);
        const x = (tempVec.x * .5 + .5) * window.innerWidth;
        const y = (-(tempVec.y * .5) + .5) * window.innerHeight;
        screenPoints.push({ x, y });
        if (pt.el) pt.el.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
      });

      lines.forEach((line) => {
        const p1 = screenPoints[line.p1];
        const p2 = screenPoints[line.p2];
        line.el.setAttribute('x1', p1.x.toString());
        line.el.setAttribute('y1', p1.y.toString());
        line.el.setAttribute('x2', p2.x.toString());
        line.el.setAttribute('y2', p2.y.toString());
      });

      if (screenPoints.length > 0 && trackerBlobRef.current) {
        const avgX = screenPoints.reduce((a, b) => a + b.x, 0) / screenPoints.length;
        const avgY = screenPoints.reduce((a, b) => a + b.y, 0) / screenPoints.length;
        trackerBlobRef.current.style.left = avgX + 'px';
        trackerBlobRef.current.style.top = avgY + 'px';
      }

      uniforms.uTime.value = time;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      canvasRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      <div id="tracker-blob" ref={trackerBlobRef} />
      <svg id="tracker-lines" ref={svgLinesRef} className="fixed inset-0 w-full h-full pointer-events-none z-[5]" />
      <div id="trackers-container" ref={trackersContainerRef} className="fixed inset-0 w-full h-full pointer-events-none z-10" />
      <div id="canvas-container" ref={canvasRef} className="fixed inset-0 pointer-events-none z-1" />
    </div>
  );
}
