import React from 'react';
import { useLanguage } from '../services/LanguageContext';

export const CultureEtiquette: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-fade-in">
       <header className="bg-red-50 p-6 rounded-xl border border-red-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <i className="ph-duotone ph-users-three text-china-red mr-3"></i>
          {t('culture.title')}
        </h1>
        <p className="text-gray-600">{t('culture.subtitle')}</p>
      </header>

      {/* Intangible Cultural Heritage Intro (Phase 2 Teaser) */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
         <div className="flex items-center mb-4">
             <i className="ph-scroll text-3xl text-amber-600 mr-3"></i>
             <h2 className="text-2xl font-bold">Intangible Cultural Heritage (ICH)</h2>
         </div>
         <p className="text-gray-600 text-sm leading-relaxed mb-4">
           China possesses a vast array of Intangible Cultural Heritage, ranging from Peking Opera and Calligraphy to traditional tea processing techniques. While exploring, look for the official UNESCO or National Heritage symbols to experience authentic Chinese culture.
         </p>
         <div className="text-xs text-gray-400 italic">More detailed guides on specific ICH locations coming soon.</div>
      </section>

      {/* Cuisine Guides */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
         <h2 className="text-2xl font-bold mb-6">Culinary Guide & The 8 Great Cuisines</h2>
         <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-100 rounded-lg bg-gray-50 flex justify-between items-center group hover:border-red-200 transition">
               <div>
                 <h3 className="font-bold text-gray-800">Sichuan Cuisine (Chuan)</h3>
                 <p className="text-xs text-gray-500">Spicy, bold, numbing (Ma La).</p>
               </div>
               <a href="./assets/pdfs/sichuan_cuisine_guide_en.pdf" download className="text-china-red opacity-0 group-hover:opacity-100 transition-opacity">
                 <i className="ph-download-simple text-xl"></i>
               </a>
            </div>

            <div className="p-4 border border-gray-100 rounded-lg bg-gray-50 flex justify-between items-center group hover:border-red-200 transition">
               <div>
                 <h3 className="font-bold text-gray-800">Cantonese Cuisine (Yue)</h3>
                 <p className="text-xs text-gray-500">Fresh, mild, dim sum.</p>
               </div>
               <a href="./assets/pdfs/cantonese_cuisine_guide_en.pdf" download className="text-china-red opacity-0 group-hover:opacity-100 transition-opacity">
                 <i className="ph-download-simple text-xl"></i>
               </a>
            </div>

             <div className="p-4 border border-gray-100 rounded-lg bg-gray-50 flex justify-between items-center group hover:border-red-200 transition">
               <div>
                 <h3 className="font-bold text-gray-800">Shandong Cuisine (Lu)</h3>
                 <p className="text-xs text-gray-500">Salty, crispy, braised.</p>
               </div>
               <a href="./assets/pdfs/shandong_cuisine_guide_en.pdf" download className="text-china-red opacity-0 group-hover:opacity-100 transition-opacity">
                 <i className="ph-download-simple text-xl"></i>
               </a>
            </div>

             <div className="p-4 border border-gray-100 rounded-lg bg-gray-50 flex justify-between items-center group hover:border-red-200 transition">
               <div>
                 <h3 className="font-bold text-gray-800">Jiangsu Cuisine (Su)</h3>
                 <p className="text-xs text-gray-500">Sweet, soft, artistic.</p>
               </div>
               <a href="./assets/pdfs/jiangsu_cuisine_guide_en.pdf" download className="text-china-red opacity-0 group-hover:opacity-100 transition-opacity">
                 <i className="ph-download-simple text-xl"></i>
               </a>
            </div>
         </div>
      </section>
    </div>
  );
};