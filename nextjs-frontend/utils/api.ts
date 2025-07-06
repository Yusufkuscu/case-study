import axios, { AxiosResponse, AxiosError } from 'axios';

// Types
export interface Product {
  name: string;
  popularityScore: number;
  weight: number;
  price: number;
  rating: number;
  goldPricePerGram: number;
  images: {
    yellow: string;
    rose: string;
    white: string;
  };
}

export interface ProductFilters {
  minPrice?: string;
  maxPrice?: string;
  minRating?: string;
  maxRating?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  goldPrice?: number;
  timestamp?: string;
  error?: string;
}

export interface GoldPriceResponse {
  success: boolean;
  goldPricePerGram: number;
  currency: string;
  timestamp: string;
  error?: string;
}

export interface HealthResponse {
  success: boolean;
  message: string;
  timestamp: string;
  error?: string;
}

// API base URL - environment variable kullanımı
const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API || 'http://localhost:3001';

// Axios instance oluştur
const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - isteği logla
api.interceptors.request.use(
  (config) => {
    console.log(`API İsteği: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error: AxiosError) => {
    console.error('API İstek Hatası:', error);
    return Promise.reject(error);
  }
);

// Response interceptor - yanıtı işle
api.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(`API Yanıtı: ${response.status} ${response.config.url}`);
    return response;
  },
  (error: AxiosError) => {
    console.error('API Yanıt Hatası:', error.response?.data || error.message);
    
    // Network hatası
    if (!error.response) {
      throw new Error('Ağ bağlantısı hatası. Lütfen internet bağlantınızı kontrol edin.');
    }
    
    // Server hatası
    if (error.response.status >= 500) {
      throw new Error('Sunucu hatası. Lütfen daha sonra tekrar deneyin.');
    }
    
    // Client hatası
    if (error.response.status >= 400) {
      throw new Error((error.response.data as any)?.error || 'İstek hatası.');
    }
    
    return Promise.reject(error);
  }
);

// API fonksiyonları
export const fetchProducts = async (filters: ProductFilters = {}): Promise<ApiResponse<Product[]>> => {
  try {
    const params = new URLSearchParams();
    
    // Filtreleri ekle
    if (filters.minPrice) params.append('minPrice', filters.minPrice);
    if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
    if (filters.minRating) params.append('minRating', filters.minRating);
    if (filters.maxRating) params.append('maxRating', filters.maxRating);
    
    const response = await api.get<ApiResponse<Product[]>>(`/products?${params}`);
    
    if (!response.data.success) {
      throw new Error(response.data.error || 'Ürünler alınamadı');
    }
    
    return response.data;
  } catch (error) {
    console.error('fetchProducts hatası:', error);
    throw error;
  }
};

export const fetchProduct = async (id: string | number): Promise<ApiResponse<Product>> => {
  try {
    const response = await api.get<ApiResponse<Product>>(`/products/${id}`);
    
    if (!response.data.success) {
      throw new Error(response.data.error || 'Ürün alınamadı');
    }
    
    return response.data;
  } catch (error) {
    console.error('fetchProduct hatası:', error);
    throw error;
  }
};

export const fetchGoldPrice = async (): Promise<GoldPriceResponse> => {
  try {
    const response = await api.get<GoldPriceResponse>('/gold-price');
    
    if (!response.data.success) {
      throw new Error(response.data.error || 'Altın fiyatı alınamadı');
    }
    
    return response.data;
  } catch (error) {
    console.error('fetchGoldPrice hatası:', error);
    throw error;
  }
};

export const checkApiHealth = async (): Promise<HealthResponse> => {
  try {
    const response = await api.get<HealthResponse>('/health');
    return response.data;
  } catch (error) {
    console.error('API sağlık kontrolü hatası:', error);
    throw error;
  }
};

export default api;







// Yusuf KUŞÇU https://www.linkedin.com/in/yusufkuscu/