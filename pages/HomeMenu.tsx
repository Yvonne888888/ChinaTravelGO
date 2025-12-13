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
      color: 'bg-white text-red-600 border-l-4 border-red-500'
    },
    { 
      path: '/money', 
      icon: 'ph-currency-cny', 
      titleKey: 'nav.money', 
      desc: 'WeChat/Alipay Setup, Currency Exchange',
      color: 'bg-white text-amber-600 border-l-4 border-amber-500'
    },
    { 
      path: '/transport', 
      icon: 'ph-train', 
      titleKey: 'nav.transport', 
      desc: 'High-Speed Rail, Metro, Maps, SIM',
      color: 'bg-white text-blue-600 border-l-4 border-blue-500'
    },
    { 
      path: '/language', 
      icon: 'ph-translate', 
      titleKey: 'nav.language', 
      desc: 'Translator Apps, Survival Phrases',
      color: 'bg-white text-purple-600 border-l-4 border-purple-500'
    },
    { 
      path: '/essentials', 
      icon: 'ph-shield-check', 
      titleKey: 'nav.essentials', 
      desc: 'Safety, Emergency, Tax Refund',
      color: 'bg-white text-green-600 border-l-4 border-green-500'
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Hero Section */}
      <div className="text-center py-8 bg-gradient-to-br from-china-red to-red-700 text-white rounded-2xl shadow-lg mb-8 mx-0 sm:mx-0">
        <i className="ph-fill ph-panda text-6xl mb-4 text-white opacity-90"></i>
        <h1 className="text-3xl font-bold mb-2 tracking-tight">{t('home.title')}</h1>
        <p className="text-red-100 text-sm opacity-90 max-w-xs mx-auto">{t('home.subtitle')}</p>
      </div>

      {/* Vertical Navigation Buttons */}
      <div className="flex flex-col space-y-4 max-w-md mx-auto">
        {MENU_ITEMS.map((item) => (
          <Link 
            key={item.path} 
            to={item.path}
            className={`group relative flex items-center p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 border border-gray-100 ${item.color}`}
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
          <p className="text-xs text-blue-100 mt-1">Hong Kong • Macau • Guangdong</p>
        </Link>
      </div>
    </div>
  );
};