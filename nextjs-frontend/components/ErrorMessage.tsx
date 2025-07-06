'use client';

import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
  retryText?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  message = 'Bir hata oluştu', 
  onRetry = null,
  retryText = 'Tekrar Dene'
}) => {
  return (
    <div className="flex items-center justify-center py-15 px-5 min-h-75">
      <div className="text-center max-w-md bg-white p-10 rounded-xl shadow-sm border border-red-100">
        <AlertCircle className="text-red-500 mx-auto mb-4" size={48} />
        <h3 className="font-inter text-xl font-medium text-gray-700 mb-3">
          Oops! Bir şeyler ters gitti
        </h3>
        <p className="font-montserrat text-sm text-gray-600 leading-relaxed mb-6">
          {message}
        </p>
        
        {onRetry && (
          <button 
            onClick={onRetry}
            className="inline-flex items-center gap-2 bg-primary text-gray-800 font-medium px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <RefreshCw size={16} />
            {retryText}
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;











// Yusuf KUŞÇU https://www.linkedin.com/in/yusufkuscu/