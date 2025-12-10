import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../services/LanguageContext';

export const InternetComm: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-fade-in">
       <header className="bg-purple-50 p-6 rounded-xl border border-purple-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <i className="ph-duotone ph-wifi-high text-purple-600 mr-3"></i>
          {t('internet.title')}
        </h1>
        <p className="text-gray-600">{t('internet.subtitle')}</p>
      </header>

      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">SIM Cards & Connectivity</h2>
        <div className="grid md:grid-cols-2 gap-6">
           <div className="p-4 border rounded-lg hover:shadow-md transition">
              <div className="flex items-center mb-2">
                 <i className="ph-sim-card text-2xl text-purple-600 mr-2"></i>
                 <h3 className="font-bold">Buying a SIM</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">Available at airport arrival halls or carrier stores (China Mobile/Unicom/Telecom). <strong>Passport required.</strong></p>
              <Link to="/guide/sim-card-guide" className="text-xs text-china-red hover:underline font-medium">
                 <i className="ph-book-open mr-1"></i> Buying Guide
              </Link>
           </div>
           <div className="p-4 border rounded-lg hover:shadow-md transition">
              <div className="flex items-center mb-2">
                 <i className="ph-qr-code text-2xl text-purple-600 mr-2"></i>
                 <h3 className="font-bold">eSIM (Recommended)</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">Apps like Airalo/Holafly offer data-only plans. These often route traffic through HK, bypassing the firewall automatically.</p>
           </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
           <h2 className="text-lg font-bold mb-3 flex items-center">
            <i className="ph-chat-teardrop-text mr-2 text-green-600"></i> Social Media & Apps
          </h2>
          <ul className="space-y-4 text-sm text-gray-600">
             <li className="flex justify-between items-center border-b pb-2">
                <div>
                  <span className="font-bold block text-gray-800">WeChat (Weixin)</span>
                  <span className="text-xs">The "Everything App". Chat, Pay, Taxi.</span>
                </div>
                <Link to="/guide/wechat-social-guide" className="text-blue-600 text-xs hover:underline">Guide</Link>
             </li>
             <li className="flex justify-between items-center border-b pb-2">
                <div>
                  <span className="font-bold block text-gray-800">Little Red Book (Xiaohongshu)</span>
                  <span className="text-xs">"Instagram of China". Great for finding hidden gems.</span>
                </div>
                <Link to="/guide/xiaohongshu-guide" className="text-blue-600 text-xs hover:underline">Guide</Link>
             </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-bold mb-3 flex items-center">
            <i className="ph-globe-lock mr-2 text-gray-600"></i> The "Great Firewall"
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Western apps (Google, Insta, WhatsApp) are blocked. 
          </p>
          <div className="bg-yellow-50 p-3 rounded text-sm text-yellow-800 border border-yellow-200">
             <strong>Critical:</strong> Download and set up a VPN <em>before</em> entering China. It is nearly impossible to download one once you arrive.
          </div>
        </div>
      </section>
    </div>
  );
};