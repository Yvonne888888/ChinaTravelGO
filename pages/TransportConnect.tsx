import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../services/LanguageContext';

export const TransportConnect: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="bg-blue-50 p-6 rounded-xl border border-blue-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <i className="ph-duotone ph-train text-blue-600 mr-3"></i>
          {t('transport.title')}
        </h1>
        <p className="text-gray-600">{t('transport.subtitle')}</p>
      </header>

      {/* Essential Apps Grid */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
         <h2 className="text-xl font-bold text-gray-900 mb-6">{t('transport.apps')}</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/guide/amap-guide" className="p-3 border rounded-lg hover:bg-blue-50 text-center group">
               <i className="ph-map-pin text-3xl text-blue-600 mb-2 group-hover:scale-110 transition"></i>
               <h3 className="font-bold text-sm">Amap</h3>
               <span className="text-xs text-gray-500">Maps & Taxi</span>
            </Link>
            <Link to="/guide/12306-guide" className="p-3 border rounded-lg hover:bg-blue-50 text-center group">
               <i className="ph-train text-3xl text-blue-600 mb-2 group-hover:scale-110 transition"></i>
               <h3 className="font-bold text-sm">Railway 12306</h3>
               <span className="text-xs text-gray-500">Train Tickets</span>
            </Link>
            <Link to="/guide/taxi-guide" className="p-3 border rounded-lg hover:bg-blue-50 text-center group">
               <i className="ph-taxi text-3xl text-yellow-500 mb-2 group-hover:scale-110 transition"></i>
               <h3 className="font-bold text-sm">Didi / Taxi</h3>
               <span className="text-xs text-gray-500">Ride Hailing</span>
            </Link>
             <Link to="/guide/public-transit-guide" className="p-3 border rounded-lg hover:bg-blue-50 text-center group">
               <i className="ph-bus text-3xl text-green-500 mb-2 group-hover:scale-110 transition"></i>
               <h3 className="font-bold text-sm">Metro</h3>
               <span className="text-xs text-gray-500">Subway Guide</span>
            </Link>
         </div>
      </section>

      {/* Connectivity (VPN & SIM) */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
           <i className="ph-wifi-high text-purple-600 mr-2"></i>
           {t('transport.connect')}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
           {/* VPN Warning */}
           <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h3 className="font-bold text-yellow-800 mb-2 flex items-center">
                 <i className="ph-warning-circle mr-2"></i> VPN is Critical
              </h3>
              <p className="text-sm text-yellow-800 mb-3">
                 Google, WhatsApp, Instagram are blocked. You <strong>must</strong> install a VPN (e.g., Astrill, LetsVPN) <strong>before</strong> arrival.
              </p>
           </div>

           {/* SIM / eSIM */}
           <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-bold text-purple-800 mb-2 flex items-center">
                 <i className="ph-sim-card mr-2"></i> Mobile Data
              </h3>
              <p className="text-sm text-purple-800 mb-3">
                 <strong>Option A (Easy):</strong> Buy an eSIM (Airalo/Holafly) before flying. Often bypasses firewall.<br/>
                 <strong>Option B (Cheap):</strong> Buy a local SIM at the airport (Passport required).
              </p>
              <Link to="/guide/sim-card-guide" className="text-xs font-bold text-purple-900 underline">Read SIM Guide</Link>
           </div>
        </div>
      </section>

      {/* Modes Overview */}
      <section className="space-y-4">
         <h2 className="text-xl font-bold text-gray-900">{t('transport.modes')}</h2>
         
         <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row gap-4">
            <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full h-12 w-12 flex items-center justify-center">
               <i className="ph-airplane-landing text-2xl text-indigo-600"></i>
            </div>
            <div>
               <h3 className="text-lg font-bold text-gray-900">Airports</h3>
               <p className="text-gray-600 text-sm mt-1">
                  Arrive 3 hours early. Power banks must be marked &lt;100Wh. 
                  <Link to="/guide/airport-guide" className="ml-2 text-blue-600 hover:underline">Read Guide</Link>
               </p>
            </div>
         </div>

         <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 flex flex-col sm:flex-row gap-4">
             <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full h-12 w-12 flex items-center justify-center">
               <i className="ph-train text-2xl text-blue-600"></i>
            </div>
            <div>
               <h3 className="text-lg font-bold text-gray-900">High-Speed Rail</h3>
               <p className="text-gray-600 text-sm mt-1">
                  Fast (350km/h) and punctual. Passport acts as your ticket.
                  <Link to="/guide/train-guide" className="ml-2 text-blue-600 hover:underline">Read Guide</Link>
               </p>
            </div>
         </div>
      </section>
    </div>
  );
};