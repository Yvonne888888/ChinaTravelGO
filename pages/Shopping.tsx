import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../services/LanguageContext';

export const Shopping: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-fade-in">
       <header className="bg-pink-50 p-6 rounded-xl border border-pink-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <i className="ph-duotone ph-shopping-bag text-pink-600 mr-3"></i>
          {t('shopping.title')}
        </h1>
        <p className="text-gray-600">{t('shopping.subtitle')}</p>
      </header>

      {/* Tax Refund Section */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
         <div className="flex items-center mb-4">
             <i className="ph-receipt text-3xl text-gray-700 mr-3"></i>
             <h2 className="text-2xl font-bold">Tax Refund Policy (Departure)</h2>
         </div>
         <p className="text-gray-600 text-sm mb-4">
           International tourists can claim VAT refunds (usually 9%-11%) at designated stores for purchases over 500 RMB. You must process this at the airport before departure.
         </p>
         <Link to="/guide/tax-refund-guide" className="inline-flex items-center px-4 py-2 border border-pink-200 rounded-md bg-pink-50 text-sm font-medium text-pink-700 hover:bg-pink-100">
             <i className="ph-book-open mr-2"></i> View Tax Refund Guide
          </Link>
      </section>

      {/* Online Shopping */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
         <h2 className="text-2xl font-bold mb-6">Major Shopping Platforms</h2>
         <div className="grid md:grid-cols-2 gap-4">
            
            {/* Taobao */}
            <div className="p-4 border border-gray-100 rounded-lg flex items-start space-x-4 hover:shadow-md transition">
               <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-orange-600">TB</span>
               </div>
               <div>
                  <h3 className="font-bold text-gray-900">Taobao (淘宝)</h3>
                  <p className="text-xs text-gray-500 mb-2">The world's biggest e-commerce market. Good for clothes, trinkets, everything.</p>
                  <a href="https://www.taobao.com" target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline">Visit Site</a>
               </div>
            </div>

            {/* JD */}
            <div className="p-4 border border-gray-100 rounded-lg flex items-start space-x-4 hover:shadow-md transition">
               <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-red-600">JD</span>
               </div>
               <div>
                  <h3 className="font-bold text-gray-900">JD.com (京东)</h3>
                  <p className="text-xs text-gray-500 mb-2">Famous for fast delivery and authentic electronics/luxury goods.</p>
                  <a href="https://www.jd.com" target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline">Visit Site</a>
               </div>
            </div>

            {/* Pinduoduo */}
            <div className="p-4 border border-gray-100 rounded-lg flex items-start space-x-4 hover:shadow-md transition">
               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-green-600">PDD</span>
               </div>
               <div>
                  <h3 className="font-bold text-gray-900">Pinduoduo (拼多多)</h3>
                  <p className="text-xs text-gray-500 mb-2">Extremely cheap, group-buying deals. Quality varies.</p>
               </div>
            </div>

            {/* 1688 */}
            <div className="p-4 border border-gray-100 rounded-lg flex items-start space-x-4 hover:shadow-md transition">
               <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-orange-800">1688</span>
               </div>
               <div>
                  <h3 className="font-bold text-gray-900">1688.com</h3>
                  <p className="text-xs text-gray-500 mb-2">Wholesale pricing. Great for bulk buying.</p>
                  <a href="https://www.1688.com" target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline">Visit Site</a>
               </div>
            </div>

         </div>
      </section>
    </div>
  );
};