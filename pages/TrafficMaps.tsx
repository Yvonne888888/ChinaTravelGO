import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../services/LanguageContext';

export const TrafficMaps: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="bg-blue-50 p-6 rounded-xl border border-blue-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <i className="ph-duotone ph-train text-blue-600 mr-3"></i>
          {t('traffic.title')}
        </h1>
        <p className="text-gray-600">{t('traffic.subtitle')}</p>
      </header>

      {/* HK/Macau Entry */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 flex items-center">
          <i className="ph-bridge text-blue-600 mr-2 text-xl"></i>
          {t('traffic.hk_title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link to="/traffic/hk-entry/hsr" className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition group">
            <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700">High Speed Rail</h3>
            <p className="text-sm text-gray-600">HK West Kowloon ➔ Shenzhen/Guangzhou.</p>
          </Link>
           <Link to="/traffic/hk-entry/bridge" className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition group">
             <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700">HK-Zhuhai-Macau Bridge</h3>
             <p className="text-sm text-gray-600">24/7 Shuttle Bus between ports.</p>
          </Link>
          <Link to="/traffic/hk-entry/ferry" className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition group">
             <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700">Ferry Ports</h3>
             <p className="text-sm text-gray-600">HK Ferry Terminal ➔ Shekou/Nansha.</p>
          </Link>
        </div>
      </section>

      {/* Transport Modes Detail (Moved UP) */}
      <section className="space-y-4">
         <h2 className="text-xl font-bold text-gray-900">Modes of Transport</h2>
         
         {/* Airport */}
         <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row gap-4 items-start">
            <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
               <i className="ph-airplane-landing text-2xl text-indigo-600"></i>
            </div>
            <div className="flex-1">
               <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-gray-900">Airports</h3>
                  <Link to="/guide/airport-guide" className="text-china-red text-sm hover:underline">
                     <i className="ph-book-open mr-1"></i> Guide
                  </Link>
               </div>
               <p className="text-gray-600 text-sm mt-1">
                  Arrive 3 hours early for international flights. Security is strict (check battery limits). 
                  Domestic flights are very punctual.
               </p>
            </div>
         </div>

         {/* Train */}
         <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row gap-4 items-start">
            <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
               <i className="ph-train text-2xl text-blue-600"></i>
            </div>
            <div className="flex-1">
               <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-gray-900">High-Speed Rail</h3>
                  <Link to="/guide/train-guide" className="text-china-red text-sm hover:underline">
                     <i className="ph-book-open mr-1"></i> Guide
                  </Link>
               </div>
               <p className="text-gray-600 text-sm mt-1">
                  The most efficient way to travel. "G-trains" hit 350km/h. Passport required for ticket pickup and entry.
               </p>
            </div>
         </div>

         {/* Taxi */}
         <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row gap-4 items-start">
            <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-full">
               <i className="ph-taxi text-2xl text-yellow-600"></i>
            </div>
            <div className="flex-1">
               <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-gray-900">Taxi & Didi</h3>
                  <Link to="/guide/taxi-guide" className="text-china-red text-sm hover:underline">
                     <i className="ph-book-open mr-1"></i> Guide
                  </Link>
               </div>
               <p className="text-gray-600 text-sm mt-1">
                  Ride-hailing (Didi) is built into Alipay/WeChat. Taxis are safe but few drivers speak English. Show address in Chinese.
               </p>
            </div>
         </div>

         {/* Metro/Bus */}
         <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row gap-4 items-start">
            <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
               <i className="ph-bus text-2xl text-green-600"></i>
            </div>
            <div className="flex-1">
               <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-gray-900">Metro & Bus</h3>
                  <Link to="/guide/public-transit-guide" className="text-china-red text-sm hover:underline">
                     <i className="ph-book-open mr-1"></i> Guide
                  </Link>
               </div>
               <p className="text-gray-600 text-sm mt-1">
                  Metros in major cities are world-class with English signage. Use Alipay "Transport" QR code to scan gates.
               </p>
            </div>
         </div>

      </section>

      {/* Essential Apps & Downloads (Moved DOWN) */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
         <h2 className="text-xl font-bold text-gray-900 mb-6">Essential Transport Apps</h2>
         <div className="grid md:grid-cols-3 gap-6">
            
            {/* Amap */}
            <div className="border border-gray-200 rounded-lg p-4 flex flex-col hover:shadow-md transition">
               <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                     <i className="ph-map-pin text-xl text-blue-600"></i>
                  </div>
                  <div>
                     <h3 className="font-bold text-gray-900">Amap (Gaode)</h3>
                     <span className="text-xs text-gray-500">Best Maps & Taxi</span>
                  </div>
               </div>
               <p className="text-xs text-gray-600 mb-4 flex-grow">More accurate than Google Maps. Includes ride-hailing.</p>
               <div className="space-y-2">
                  <a href="https://www.amap.com/mobile" target="_blank" rel="noreferrer" className="block text-center py-1.5 bg-blue-600 text-white text-xs rounded hover:bg-blue-700">Download App</a>
                  <Link to="/guide/amap-guide" className="block text-center py-1.5 border border-gray-300 text-gray-600 text-xs rounded hover:bg-gray-50">
                     <i className="ph-book-open mr-1"></i> User Guide
                  </Link>
               </div>
            </div>

            {/* 12306 */}
            <div className="border border-gray-200 rounded-lg p-4 flex flex-col hover:shadow-md transition">
               <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                     <i className="ph-train text-xl text-blue-600"></i>
                  </div>
                  <div>
                     <h3 className="font-bold text-gray-900">Railway 12306</h3>
                     <span className="text-xs text-gray-500">Official Train Ticket App</span>
                  </div>
               </div>
               <p className="text-xs text-gray-600 mb-4 flex-grow">No booking fees. Official source for all High-Speed Rail.</p>
               <div className="space-y-2">
                  <a href="https://www.12306.cn/en/index.html" target="_blank" rel="noreferrer" className="block text-center py-1.5 bg-blue-600 text-white text-xs rounded hover:bg-blue-700">Website / App</a>
                  <Link to="/guide/12306-guide" className="block text-center py-1.5 border border-gray-300 text-gray-600 text-xs rounded hover:bg-gray-50">
                     <i className="ph-book-open mr-1"></i> Booking Guide
                  </Link>
               </div>
            </div>

            {/* Travel Agencies */}
            <div className="border border-gray-200 rounded-lg p-4 flex flex-col hover:shadow-md transition">
               <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                     <i className="ph-airplane text-xl text-blue-600"></i>
                  </div>
                  <div>
                     <h3 className="font-bold text-gray-900">Trip.com / Fliggy</h3>
                     <span className="text-xs text-gray-500">Flights & Hotels</span>
                  </div>
               </div>
               <p className="text-xs text-gray-600 mb-4 flex-grow">Trip.com is English-friendly. Fliggy (Alibaba) offers great local deals.</p>
               <div className="space-y-2">
                  <a href="https://www.trip.com" target="_blank" rel="noreferrer" className="block text-center py-1.5 bg-blue-600 text-white text-xs rounded hover:bg-blue-700">Go to Trip.com</a>
                  <Link to="/guide/booking-apps-guide" className="block text-center py-1.5 border border-gray-300 text-gray-600 text-xs rounded hover:bg-gray-50">
                     <i className="ph-book-open mr-1"></i> Comparison Guide
                  </Link>
               </div>
            </div>

         </div>
      </section>
    </div>
  );
};