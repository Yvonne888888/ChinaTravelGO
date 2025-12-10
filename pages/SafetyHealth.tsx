import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../services/LanguageContext';

export const SafetyHealth: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-fade-in">
       <header className="bg-green-50 p-6 rounded-xl border border-green-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <i className="ph-duotone ph-shield-check text-green-600 mr-3"></i>
          {t('safety.title')}
        </h1>
        <p className="text-gray-600">{t('safety.subtitle')}</p>
      </header>

      {/* Emergency Numbers */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Emergency Numbers</h2>
        <div className="grid grid-cols-3 gap-4">
           <div className="p-4 bg-red-50 rounded-lg border border-red-100">
              <div className="text-3xl font-black text-red-600 mb-1">110</div>
              <div className="text-sm font-medium text-gray-600">Police</div>
           </div>
           <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
              <div className="text-3xl font-black text-orange-600 mb-1">119</div>
              <div className="text-sm font-medium text-gray-600">Fire</div>
           </div>
           <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <div className="text-3xl font-black text-green-600 mb-1">120</div>
              <div className="text-sm font-medium text-gray-600">Ambulance</div>
           </div>
        </div>
      </section>

      {/* Food Delivery & Dining */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
             <h2 className="text-2xl font-bold mb-6 flex items-center">
           <i className="ph-bowl-food text-amber-600 mr-2"></i>
           Dining & Food Delivery
         </h2>
         
         <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
               <h3 className="font-bold text-gray-900">Ordering Food (Waimai)</h3>
               <p className="text-sm text-gray-600">
                  Food delivery is incredibly efficient in China. You can order anything from milk tea to hot pot to your hotel room.
               </p>
               <div className="flex space-x-3">
                  <div className="flex-1 p-3 border rounded bg-yellow-50 border-yellow-200">
                     <span className="font-bold text-yellow-800 block text-sm">Meituan</span>
                     <span className="text-xs text-gray-500">The dominant app.</span>
                  </div>
                  <div className="flex-1 p-3 border rounded bg-blue-50 border-blue-200">
                     <span className="font-bold text-blue-800 block text-sm">Ele.me</span>
                     <span className="text-xs text-gray-500">Alibaba ecosystem.</span>
                  </div>
               </div>
               <Link to="/guide/food-delivery-guide" className="inline-flex items-center text-sm font-medium text-amber-600 hover:underline">
                  <i className="ph-book-open mr-1"></i> View Delivery App Guide
               </Link>
            </div>

            <div className="space-y-4">
               <h3 className="font-bold text-gray-900">Choosing a Restaurant</h3>
               <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                     <i className="ph-star text-amber-400 mr-2 mt-0.5"></i>
                     <span><strong>Check Dianping:</strong> The "Yelp" of China. Look for rating scores above 4.5.</span>
                  </li>
                  <li className="flex items-start">
                     <i className="ph-storefront text-gray-400 mr-2 mt-0.5"></i>
                     <span><strong>Hygiene:</strong> Look for the "Smiling Face" hygiene rating sticker in the restaurant window (Green is best).</span>
                  </li>
               </ul>
            </div>
         </div>
      </section>

      {/* Safety & Health Info */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
           <h2 className="text-lg font-bold mb-3">Safety Overview</h2>
           <p className="text-sm text-gray-600 leading-relaxed">
             China is extremely safe. Violent crime is rare. The main annoyances are "tea house scams" or "art gallery scams" where overly friendly strangers invite you to a place with exorbitant prices.
           </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
           <h2 className="text-lg font-bold mb-3">Health Tips</h2>
           <ul className="space-y-2 text-sm text-gray-600">
             <li className="flex items-start">
               <i className="ph-drop-slash text-blue-400 mt-0.5 mr-2"></i>
               <strong>Water:</strong> Drink bottled water only.
             </li>
             <li className="flex items-start">
               <i className="ph-first-aid text-red-400 mt-0.5 mr-2"></i>
               <strong>Pharmacy:</strong> Look for "药" (Yao).
             </li>
             <li className="flex items-start">
               <i className="ph-toilet-paper text-gray-400 mt-0.5 mr-2"></i>
               <strong>Restrooms:</strong> Carry tissues.
             </li>
           </ul>
        </div>
      </section>
    </div>
  );
};