import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../services/LanguageContext';

const NAV_ITEMS = [
  { path: '/visa', icon: 'ph-passport', labelKey: 'nav.visa' },
  { path: '/currency', icon: 'ph-currency-cny', labelKey: 'nav.currency' },
  { path: '/traffic', icon: 'ph-train', labelKey: 'nav.traffic' },
  { path: '/internet', icon: 'ph-wifi-high', labelKey: 'nav.internet' },
  { path: '/shopping', icon: 'ph-shopping-bag', labelKey: 'nav.shopping' },
  { path: '/safety', icon: 'ph-shield-check', labelKey: 'nav.safety' },
];

export const Navbar: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Title */}
          <Link to="/" className="flex-shrink-0 flex items-center">
             <i className="ph-fill ph-panda text-3xl text-china-red mr-2"></i>
             <span className="font-bold text-xl text-gray-900 tracking-tight hidden md:block">China Traveler Toolkit</span>
          </Link>

          {/* Navigation Links (Scrollable on mobile) */}
          <div className="flex-1 flex items-center justify-center overflow-x-auto no-scrollbar mx-2 sm:mx-4">
            <div className="flex space-x-1 sm:space-x-4">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname.startsWith(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex flex-col items-center justify-center px-2 py-1 rounded-md transition-colors duration-200 min-w-[55px] sm:min-w-[80px]
                      ${isActive 
                        ? 'text-china-red bg-red-50' 
                        : 'text-gray-500 hover:text-china-red hover:bg-gray-50'
                      }`}
                  >
                    <i className={`${item.icon} text-xl sm:text-2xl mb-0.5`}></i>
                    <span className="text-[10px] sm:text-xs font-medium whitespace-nowrap text-center leading-tight">{t(item.labelKey).split(' & ')[0]}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Language Switcher */}
          <div className="flex-shrink-0">
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="px-2 py-1 sm:px-3 rounded border border-gray-300 text-sm font-medium hover:bg-gray-100 transition"
            >
              {language === 'en' ? '中文' : 'EN'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};