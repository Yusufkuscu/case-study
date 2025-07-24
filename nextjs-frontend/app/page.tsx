'use client';

import React, { useState, useEffect } from 'react';
import ProductCarousel from '@/components/ProductCarousel';
import ProductFilters from '@/components/ProductFilters';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorMessage from '@/components/ErrorMessage';
import { fetchProducts, Product, ProductFilters as Filters } from '@/utils/api';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [goldPrice, setGoldPrice] = useState(0);
  const [filters, setFilters] = useState<Filters>({
    minPrice: '',
    maxPrice: '',
    minRating: '',
    maxRating: ''
  });

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [products, filters]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetchProducts();
      setProducts(response.data);
      setGoldPrice(response.goldPrice || 0);
    } catch (err) {
      setError('Ürünler yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
      console.error('API Hatası:', err);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...products];

    if (filters.minPrice) {
      filtered = filtered.filter(product => product.price >= parseFloat(filters.minPrice!));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(product => product.price <= parseFloat(filters.maxPrice!));
    }
    if (filters.minRating) {
      filtered = filtered.filter(product => product.rating >= parseFloat(filters.minRating!));
    }
    if (filters.maxRating) {
      filtered = filtered.filter(product => product.rating <= parseFloat(filters.maxRating!));
    }

    setFilteredProducts(filtered);
  };

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters({
      minPrice: '',
      maxPrice: '',
      minRating: '',
      maxRating: ''
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <ErrorMessage 
            message={error} 
            onRetry={loadProducts}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <header className="text-center py-10 border-b border-gray-100 mb-10">
          <h1 className="font-avenir text-[45px] font-light text-gray-800 mb-2 tracking-wide">
            Product List
          </h1>
          <div className="flex justify-center items-center gap-5 flex-wrap">
            {goldPrice > 0 && (
              <span className="font-montserrat text-sm text-primary font-medium bg-gray-50 px-3 py-1 rounded-full">
                Güncel Altın Fiyatı: ${goldPrice}/gram
              </span>
            )}
          </div>
        </header>

        {/* Filters */}
        <ProductFilters 
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={clearFilters}
          productsCount={filteredProducts.length}
          totalCount={products.length}
        />

        {/* Product Carousel */}
        {filteredProducts.length > 0 ? (
          <ProductCarousel products={filteredProducts} />
        ) : (
          <div className="text-center py-15 bg-gray-50 rounded-xl my-10">
            <h3 className="font-inter text-xl text-gray-800 mb-2">
              Arama kriterlerinize uygun ürün bulunamadı
            </h3>
            <p className="font-montserrat text-gray-600 mb-5">
              Lütfen filtreleri değiştirerek tekrar deneyin.
            </p>
            <button 
              onClick={clearFilters} 
              className="bg-primary text-gray-800 font-medium px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Filtreleri Temizle
            </button>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center py-10 border-t border-gray-100 mt-15">
          <p className="font-montserrat text-sm text-gray-500">
            © 2025 YUSUF - Lüks Mücevher Koleksiyonu
          </p>
        </footer>
      </div>
    </div>
  );
}











// Yusuf KUŞÇU https://www.linkedin.com/in/yusufkuscu/
