'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/utils/api';
import type { Swiper as SwiperType } from 'swiper';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.activeIndex);
  };

  if (!products || products.length === 0) {
    return (
      <div className="w-full max-w-7xl mx-auto py-5">
        <div className="text-center py-15 bg-gray-50 rounded-xl my-10">
          <h3 className="font-avenir text-xl text-gray-800 mb-2">Henüz ürün bulunamadı</h3>
          <p className="font-montserrat text-gray-600">Lütfen daha sonra tekrar kontrol edin.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto py-5">
      <div className="flex justify-between items-center mb-5 px-5">
        <div className="flex items-center gap-4">
          <span className="font-montserrat text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-xl font-medium">
            {currentIndex + 1} / {products.length}
          </span>
        </div>
      </div>

      <div className="px-10 pb-16 relative">
        <Swiper
          modules={[Navigation, Scrollbar, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          scrollbar={{
            hide: false,
            draggable: true,
            el: '.swiper-scrollbar',
            dragSize: 'auto',
            snapOnRelease: true,
          }}
          speed={400}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={products.length > 1}
          onSlideChange={handleSlideChange}
          grabCursor={true}
          touchRatio={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 35,
            },
          }}
          className="product-swiper h-960"
        >
          {products.map((product, index) => (
            <SwiperSlide key={`${product.name}-${index}`}>
              <ProductCard product={product} index={index} />
            </SwiperSlide>
          ))}
          
          {/* Navigation buttons */}
          <div className="swiper-button-prev !w-12 !h-12 !-left-1 !top-35 !mt-0 !bg-white/90 !rounded-full !shadow-lg hover:!bg-white hover:!shadow-xl !transition-all after:!text-black after:!text-lg after:!font-bold"></div>
          <div className="swiper-button-next !w-12 !h-12 !-right-1 !top-35 !mt-0 !bg-white/90 !rounded-full !shadow-lg hover:!bg-white hover:!shadow-xl !transition-all after:!text-black after:!text-lg after:!font-bold"></div>
          
          {/* Scrollbar */}
          <div className="swiper-scrollbar !bottom-1000 !left-15 !right-15 !h-3 !bg-gray-200 !rounded-md !opacity-100 !z-20 !cursor-pointer">
            <div className="swiper-scrollbar-drag !bg-gray-600 !rounded-md !cursor-grab !h-3 !min-w-20 hover:!bg-gray-800 active:!cursor-grabbing active:!bg-black"></div>
          </div>
        </Swiper>
      </div>

      {/* Custom pagination info */}
      <div className="flex justify-center items-center mt-5 px-5">
        <div className="font-montserrat text-sm text-gray-600 text-center">
          <span>Toplam {products.length} ürün</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;








// Yusuf KUŞÇU https://www.linkedin.com/in/yusufkuscu/