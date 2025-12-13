import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../services/LanguageContext';

export const HomeMenu: React.FC = () => {
  const { t } = useLanguage();

  const MENU_ITEMS = [
    { 
      path: '/visa', 
      icon: 'ph-passport', 
      titleKey: 'nav.visa', 
      desc: 'Visa Policy, 144h Transit, Customs',
      textColor: 'text-red-600',
      borderColor: '#EF4444',
      accentColor: '#DC2626'
    },
    { 
      path: '/money', 
      icon: 'ph-currency-cny', 
      titleKey: 'nav.money', 
      desc: 'WeChat/Alipay Setup, Currency Exchange',
      textColor: 'text-amber-600',
      borderColor: '#D97706',
      accentColor: '#B45309'
    },
    { 
      path: '/transport', 
      icon: 'ph-train', 
      titleKey: 'nav.transport', 
      desc: 'High-Speed Rail, Metro, Maps, SIM',
      textColor: 'text-blue-600',
      borderColor: '#2563EB',
      accentColor: '#1D4ED8'
    },
    { 
      path: '/language', 
      icon: 'ph-translate', 
      titleKey: 'nav.language', 
      desc: 'Translator Apps, Survival Phrases',
      textColor: 'text-purple-600',
      borderColor: '#A855F7',
      accentColor: '#9333EA'
    },
    { 
      path: '/essentials', 
      icon: 'ph-shield-check', 
      titleKey: 'nav.essentials', 
      desc: 'Safety, Emergency, Tax Refund',
      textColor: 'text-green-600',
      borderColor: '#16A34A',
      accentColor: '#15803D'
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-12 pt-4">
      {/* Simple Header with Logo */}
      <div className="text-center mb-8">
        <i className="ph-fill ph-panda text-6xl text-china-red mb-2 inline-block"></i>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{t('home.title')}</h1>
        <p className="text-gray-500 text-sm mt-2">{t('home.subtitle')}</p>
      </div>

      {/* Vertical Navigation Buttons */}
      <div className="flex flex-col space-y-4 max-w-md mx-auto">
        {MENU_ITEMS.map((item) => (
          <Link 
            key={item.path} 
            to={item.path}
            style={{
              borderLeftColor: item.borderColor,
            }}
            className={`group relative flex items-center p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 bg-white border border-gray-100 border-l-4 ${item.textColor}`}
          >
            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mr-5 group-hover:bg-gray-100 transition-colors">
              <i className={`${item.icon} text-3xl`}></i>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900">{t(item.titleKey)}</h2>
              <p className="text-xs text-gray-500 mt-1 font-medium">{item.desc}</p>
            </div>
            <i className="ph-caret-right text-gray-300 text-xl group-hover:text-gray-500 transition-colors"></i>
          </Link>
        ))}
      </div>

      {/* GBA Promo */}
      <div className="pt-6 text-center max-w-md mx-auto">
        <Link 
          to="/gba"
          className="block w-full p-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          <div className="flex items-center justify-center">
            <span className="font-bold tracking-wide uppercase">{t('home.gba')}</span>
            <i className="ph-arrow-right ml-2"></i>
          </div>
        </Link>
      </div>
    </div>
  );
};