import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../services/LanguageContext';

export const EssentialsSafety: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-fade-in">
       <header className="bg-green-50 p-6 rounded-xl border border-green-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <i className="ph-duotone ph-shield-check text-green-600 mr-3"></i>
          {t('essentials.title')}
        </h1>
        <p className="text-gray-600">{t('essentials.subtitle')}</p>
      </header>

      {/* Emergency */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">{t('essentials.emergency')}</h2>
        <div className="grid grid-cols-3 gap-4">
           <div className="p-4 bg-red-50 rounded-lg border border-red-100">
              <div className="text-3xl font-black text-red-600 mb-1">110</div>
              <div className="text-sm font-medium text-gray-600">{t('essentials.police')}</div>
           </div>
           <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
              <div className="text-3xl font-black text-orange-600 mb-1">119</div>
              <div className="text-sm font-medium text-gray-600">{t('essentials.fire')}</div>
           </div>
           <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="text-3xl font-black text-green-600 mb-1">120</div>
              <div className="text-sm font-medium text-gray-600">{t('essentials.medic')}</div>
           </div>
        </div>
      </section>

      {/* Scams & Safety */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
           <h2 className="text-lg font-bold mb-3 text-red-700 flex items-center">
             <i className="ph-warning text-red-600 mr-2"></i> {t('essentials.scams')}
           </h2>
           <ul className="space-y-3 text-sm text-gray-600">
             <li className="bg-red-50 p-3 rounded">
               {t('essentials.scam_tea')}
             </li>
             <li className="bg-red-50 p-3 rounded">
               {t('essentials.scam_taxi')}
             </li>
           </ul>
      </section>

      {/* Tax Refund (Shopping) */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
         <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
            <i className="ph-receipt text-pink-600 mr-2"></i>
            {t('essentials.tax')}
         </h2>
         <p className="text-gray-600 text-sm mb-4">
           {t('essentials.tax_info')}
         </p>
         <Link to="/guide/tax-refund-guide" className="inline-flex items-center px-4 py-2 border border-pink-200 rounded-md bg-pink-50 text-sm font-medium text-pink-700 hover:bg-pink-100">
             <i className="ph-book-open mr-2"></i> {t('essentials.tax_guide')}
          </Link>
      </section>
      
       {/* Food Safety */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
         <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
            <i className="ph-bowl-food text-amber-600 mr-2"></i>
            {t('essentials.food_title')}
         </h2>
         <ul className="space-y-2 text-sm text-gray-600">
            <li><i className="ph-drop-slash text-blue-400 mr-2"></i>{t('essentials.food_water')}</li>
            <li><i className="ph-storefront text-gray-400 mr-2"></i>{t('essentials.food_street')}</li>
         </ul>
      </section>
    </div>
  );
};
