'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/utils/api';

// Star SVG Component
const Star: React.FC<{ className?: string; size?: number; fill?: string }> = ({ 
  className = '', 
  size = 16, 
  fill = 'currentColor' 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    className={className}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

interface ProductCardProps {
  product: Product;
  index: number;
}

interface ColorInfo {
  name: string;
  code: string;
  label: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const [selectedColor, setSelectedColor] = useState<string>('yellow');
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const colors: Record<string, ColorInfo> = {
    yellow: { 
      name: 'Yellow Gold', 
      code: '#E6CA97', 
      label: 'Yellow Gold' 
    },
    white: { 
      name: 'White Gold', 
      code: '#D9D9D9', 
      label: 'White Gold' 
    },
    rose: { 
      name: 'Rose Gold', 
      code: '#E1A4A9', 
      label: 'Rose Gold' 
    }
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setImageLoading(true);
    setImageError(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star 
          key={i} 
          className="text-primary fill-current" 
          size={12}
        />
      );
    }

    // Half star with gradient
    if (hasHalfStar) {
      stars.push(
        <div key="half-star" className="relative">
          <Star 
            className="text-gray-300" 
            size={12}
          />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star 
              className="text-primary fill-current" 
              size={12}
            />
          </div>
        </div>
      );
    }

    // Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star 
          key={`empty-${i}`} 
          className="text-gray-300" 
          size={12}
        />
      );
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
     {/* Product Image */}
<div className="relative w-full h-80 overflow-hidden">
  {imageLoading && (
    <div className="absolute inset-0 flex items-center justify-center bg-white">
      <div className="loading-spinner w-8 h-8"></div>
    </div>
  )}
  
  {imageError ? (
    <div className="absolute inset-0 flex items-center justify-center bg-white">
      <div className="text-center text-gray-400">
        <span className="font-montserrat text-sm">Görsel yüklenemedi</span>
      </div>
    </div>
  ) : (
    <Image
      src={product.images[selectedColor as keyof typeof product.images]}
      alt={`${product.name} - ${colors[selectedColor].label}`}
      fill
      className={`object-contain transition-opacity duration-300 p-4 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
      onLoad={handleImageLoad}
      onError={handleImageError}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
    />
  )}
</div>


      {/* Product Info */}
      <div className="p-5 flex-1 flex flex-col gap-2 text-left">
        <h3 className="font-montserrat text-[15px] font-medium text-gray-800 m-0 leading-snug">
          {product.name}
        </h3>
        <p className="font-montserrat text-[15px] font-normal text-gray-800 m-0">
          ${product.price.toFixed(2)} USD
        </p>
        
        {/* Color Selector - Fiyatın altında */}
        <div className="flex gap-2 my-2 items-center">
          {Object.entries(colors).map(([colorKey, colorInfo]) => (
            <button
              key={colorKey}
              className={`w-6 h-6 rounded-full border transition-all duration-200 flex items-center justify-center shadow-sm hover:scale-110 hover:shadow-md ${
                selectedColor === colorKey 
                  ? 'border-2 border-gray-800 shadow-md' 
                  : 'border border-gray-300 shadow-sm'
              }`}
              style={{ backgroundColor: colorInfo.code }}
              onClick={() => handleColorChange(colorKey)}
              title={colorInfo.label}
              aria-label={`${colorInfo.label} rengini seç`}
            />
          ))}
        </div>
        
        {/* Color Info */}
        <div className="my-1">
          <span className="font-avenir text-[12px] font-light text-gray-600">
            {colors[selectedColor].label}
          </span>
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mt-auto pt-2">
          <div className="flex gap-0.5 items-center">
            {renderStars(product.rating)}
          </div>
          <span className="font-avenir text-[14px] font-light text-gray-600">
            {product.rating.toFixed(1)}/5
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;








// Yusuf KUŞÇU https://www.linkedin.com/in/yusufkuscu/