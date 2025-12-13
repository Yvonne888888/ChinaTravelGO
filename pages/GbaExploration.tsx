import React from 'react';
import { Link } from 'react-router-dom';

export const GbaExploration: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in text-center py-12">
      <div className="inline-block p-6 rounded-full bg-blue-50 mb-4">
         <i className="ph-globe-hemisphere-east text-6xl text-blue-600"></i>
      </div>
      <h1 className="text-4xl font-bold text-gray-900">Greater Bay Area Exploration</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Your guide to Hong Kong, Macau, and Guangdong is coming soon.
      </p>
      <p className="text-gray-500">
        Discover the seamless travel circle of the GBA.
      </p>
      <div className="pt-8">
        <Link to="/" className="text-china-red hover:underline font-medium">Back to Home</Link>
      </div>
    </div>
  );
};