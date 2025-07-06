'use client';

import React, { useState } from 'react';
import { Filter, X, DollarSign, Star } from 'lucide-react';
import { ProductFilters as Filters } from '@/utils/api';

interface ProductFiltersProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
  onClearFilters: () => void;
  productsCount: number;
  totalCount: number;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  productsCount, 
  totalCount 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (field: keyof Filters, value: string) => {
    onFilterChange({
      ...filters,
      [field]: value
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-8 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      {/* Filter Toggle Button */}
      <div className="flex justify-between items-center p-4 bg-gray-50 border-b border-gray-200">
        <button 
          className={`flex items-center gap-2 bg-transparent border-none cursor-pointer font-montserrat font-medium text-gray-700 px-3 py-2 rounded-lg transition-all duration-200 ${
            isOpen ? 'bg-primary text-gray-800' : 'hover:bg-gray-200 hover:text-gray-900'
          }`}
          onClick={toggleFilters}
          aria-expanded={isOpen}
          aria-controls="filter-panel"
        >
          <Filter size={18} />
          <span>Filtreler</span>
          {hasActiveFilters && (
            <span className="bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full min-w-4 h-4 flex items-center justify-center ml-1">
              {Object.values(filters).filter(v => v !== '').length}
            </span>
          )}
        </button>
        
        <div className="flex items-center gap-4">
          <span className="font-montserrat text-sm text-gray-600 font-medium">
            {productsCount} / {totalCount} ürün
          </span>
        </div>
      </div>

      {/* Filter Panel */}
      <div 
        id="filter-panel"
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="p-6">
          
          {/* Price Range Filters */}
          <div className="mb-6">
            <h3 className="flex items-center gap-2 font-inter text-base font-medium text-gray-700 mb-3">
              <DollarSign size={16} />
              Fiyat Aralığı (USD)
            </h3>
            <div className="flex items-end gap-3">
              <div className="flex-1 flex flex-col gap-1.5">
                <label htmlFor="minPrice" className="font-montserrat text-sm font-medium text-gray-600">
                  Min. Fiyat
                </label>
                <input
                  id="minPrice"
                  type="number"
                  placeholder="0"
                  value={filters.minPrice}
                  onChange={(e) => handleInputChange('minPrice', e.target.value)}
                  min="0"
                  step="10"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg font-montserrat text-sm bg-white transition-all duration-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 hover:border-gray-400"
                />
              </div>
              <div className="text-gray-600 font-medium mx-1 pb-2.5">-</div>
              <div className="flex-1 flex flex-col gap-1.5">
                <label htmlFor="maxPrice" className="font-montserrat text-sm font-medium text-gray-600">
                  Max. Fiyat
                </label>
                <input
                  id="maxPrice"
                  type="number"
                  placeholder="10000"
                  value={filters.maxPrice}
                  onChange={(e) => handleInputChange('maxPrice', e.target.value)}
                  min="0"
                  step="10"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg font-montserrat text-sm bg-white transition-all duration-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 hover:border-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Rating Range Filters */}
          <div className="mb-6">
            <h3 className="flex items-center gap-2 font-inter text-base font-medium text-gray-700 mb-3">
              <Star size={16} />
              Popülerlik Puanı
            </h3>
            <div className="flex items-end gap-3">
              <div className="flex-1 flex flex-col gap-1.5">
                <label htmlFor="minRating" className="font-montserrat text-sm font-medium text-gray-600">
                  Min. Puan
                </label>
                <select
                  id="minRating"
                  value={filters.minRating}
                  onChange={(e) => handleInputChange('minRating', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg font-montserrat text-sm bg-white transition-all duration-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 hover:border-gray-400"
                >
                  <option value="">Seçiniz</option>
                  <option value="1">1+ Yıldız</option>
                  <option value="2">2+ Yıldız</option>
                  <option value="3">3+ Yıldız</option>
                  <option value="4">4+ Yıldız</option>
                  <option value="4.5">4.5+ Yıldız</option>
                </select>
              </div>
              <div className="text-gray-600 font-medium mx-1 pb-2.5">-</div>
              <div className="flex-1 flex flex-col gap-1.5">
                <label htmlFor="maxRating" className="font-montserrat text-sm font-medium text-gray-600">
                  Max. Puan
                </label>
                <select
                  id="maxRating"
                  value={filters.maxRating}
                  onChange={(e) => handleInputChange('maxRating', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg font-montserrat text-sm bg-white transition-all duration-200 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 hover:border-gray-400"
                >
                  <option value="">Seçiniz</option>
                  <option value="2">2 Yıldız</option>
                  <option value="3">3 Yıldız</option>
                  <option value="4">4 Yıldız</option>
                  <option value="5">5 Yıldız</option>
                </select>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center pt-5 border-t border-gray-200">
            {hasActiveFilters && (
              <button 
                className="flex items-center gap-1.5 bg-gray-100 text-gray-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                onClick={onClearFilters}
                aria-label="Tüm filtreleri temizle"
              >
                <X size={16} />
                Filtreleri Temizle
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;










// Yusuf KUŞÇU https://www.linkedin.com/in/yusufkuscu/