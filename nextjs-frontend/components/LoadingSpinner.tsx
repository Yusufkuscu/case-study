'use client';

import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  message = 'Yükleniyor...' 
}) => {
  const sizeClasses: Record<string, string> = {
    small: 'w-6 h-6 border-2',
    medium: 'w-10 h-10 border-3',
    large: 'w-15 h-15 border-4'
  };

  return (
    <div className="flex flex-col items-center justify-center py-15 px-5 text-center">
      <div className={`loading-spinner ${sizeClasses[size]} mb-4`}></div>
      {message && (
        <p className="font-montserrat text-sm text-gray-600 m-0 font-medium">
          {message}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;






// Yusuf KUŞÇU https://www.linkedin.com/in/yusufkuscu/