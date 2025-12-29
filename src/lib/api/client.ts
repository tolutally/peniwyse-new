/**
 * API Client
 * Handles all API requests with mock mode support
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
const MOCK_MODE = process.env.NEXT_PUBLIC_API_MOCK_MODE === 'true';

interface RequestOptions extends RequestInit {
    params?: Record<string, string>;
}

class ApiClient {
    private baseUrl: string;
    private mockMode: boolean;

    constructor(baseUrl: string, mockMode: boolean) {
        this.baseUrl = baseUrl;
        this.mockMode = mockMode;
    }

    private async request<T>(
        endpoint: string,
        options: RequestOptions = {}
    ): Promise<T> {
        const { params, ...fetchOptions } = options;

        let url = `${this.baseUrl}${endpoint}`;

        if (params) {
            const searchParams = new URLSearchParams(params);
            url += `?${searchParams.toString()}`;
        }

        // In mock mode, intercept requests
        if (this.mockMode) {
            // Mock transport will be implemented
            console.log('[Mock API]', options.method || 'GET', endpoint);
            return {} as T;
        }

        const response = await fetch(url, {
            ...fetchOptions,
            headers: {
                'Content-Type': 'application/json',
                ...fetchOptions.headers,
            },
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        return response.json();
    }

    async get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
        return this.request<T>(endpoint, { method: 'GET', params });
    }

    async post<T>(endpoint: string, data?: any): Promise<T> {
        return this.request<T>(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async put<T>(endpoint: string, data?: any): Promise<T> {
        return this.request<T>(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    }

    async delete<T>(endpoint: string): Promise<T> {
        return this.request<T>(endpoint, { method: 'DELETE' });
    }
}

export const apiClient = new ApiClient(API_URL, MOCK_MODE);
