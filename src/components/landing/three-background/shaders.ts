export const vertexShader = `
  uniform float uTime;
  uniform float uDistortion;
  uniform float uSize;
  uniform float uSpread;
  uniform vec2 uMouse;

  varying float vAlpha;
  varying vec3 vPos;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) {
      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 = v - i + dot(i, C.xxx) ;
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );
      vec3 x1 = x0 - i1 + 1.0 * C.xxx;
      vec3 x2 = x0 - i2 + 2.0 * C.xxx;
      vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
      i = mod289(i);
      vec4 p = permute( permute( permute(
                  i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
      float n_ = 1.0/7.0;
      vec3  ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
  }

  float rand(vec2 co){
      return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
  }

  void main() {
      vec3 pos = position;
      float noise = snoise(vec3(pos.x * 0.4 + uTime * 0.2, pos.y * 0.4, pos.z * 0.4));
      vec3 randomScatter = vec3(
          rand(uv + uTime * 0.01) - 0.5,
          rand(uv + 1.0) - 0.5,
          rand(uv + 2.0) - 0.5
      ) * uSpread * 0.8;
      vec3 dir = normalize(pos);
      float explosion = smoothstep(0.2, 1.0, noise) * uDistortion;
      vec3 finalPos = pos + (dir * explosion) + randomScatter;
      float mouseDist = distance(uMouse * 10.0, finalPos.xy);
      float mouseForce = smoothstep(4.0, 0.0, mouseDist);
      finalPos += dir * mouseForce * 0.5;
      vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      gl_PointSize = uSize * (20.0 / -mvPosition.z);
      vAlpha = 1.0 - (uSpread * 0.5);
      vPos = finalPos;
  }
`;

export const fragmentShader = `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vAlpha;
  varying vec3 vPos;
  void main() {
      vec2 center = gl_PointCoord - vec2(0.5);
      float dist = length(center);
      if (dist > 0.5) discard;
      float alpha = smoothstep(0.5, 0.4, dist) * uOpacity * vAlpha;
      float depthColor = smoothstep(-5.0, 5.0, vPos.z);
      vec3 finalColor = mix(uColor * 0.5, uColor * 1.5, depthColor);
      gl_FragColor = vec4(finalColor, alpha);
  }
`;
