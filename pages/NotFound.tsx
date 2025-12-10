import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in px-4">
      <i className="ph-mask-sad text-6xl text-gray-300 mb-4"></i>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
      <p className="text-gray-600 mb-8">Page not found.</p>
      
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-800 transition"
      >
        <i className="ph-arrow-u-up-left mr-2"></i>
        Go Back
      </button>
    </div>
  );
};