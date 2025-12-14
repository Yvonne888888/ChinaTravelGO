import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../services/LanguageContext';

export const GbaExploration: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-8 animate-fade-in text-center py-12">
      <div className="inline-block p-6 rounded-full bg-blue-50 mb-4">
         <i className="ph-globe-hemisphere-east text-6xl text-blue-600"></i>
      </div>
      <h1 className="text-4xl font-bold text-gray-900">{t('gba.title')}</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        {t('gba.subtitle')}
      </p>
      <p className="text-gray-500">
        {t('gba.description')}
      </p>
      <div className="pt-8">
        <Link to="/" className="text-china-red hover:underline font-medium">{t('gba.back_home')}</Link>
      </div>
    </div>
  );
};