import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../services/LanguageContext';

export const HkEntryDetail: React.FC = () => {
  const { methodId } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const getContent = () => {
    switch(methodId) {
      case 'hsr':
        return {
          title: "High Speed Rail (HSR)",
          icon: "ph-train",
          color: "text-blue-600",
          content: "The High Speed Rail connects Hong Kong West Kowloon Station directly to Shenzhen (Futian/North) and Guangzhou (South/East). Immigration for both HK and China is handled inside West Kowloon Station ('Co-location Arrangement'). It is the fastest and most comfortable method."
        };
      case 'bridge':
        return {
          title: "HK-Zhuhai-Macau Bridge",
          icon: "ph-bridge",
          color: "text-orange-600",
          content: "The world's longest sea crossing. You can take the 24/7 'Golden Bus' shuttle from the HK Port (near airport) to Zhuhai or Macau. It's scenic and convenient if you are near Lantau Island."
        };
      case 'ferry':
        return {
          title: "Ferry Terminals",
          icon: "ph-boat",
          color: "text-cyan-600",
          content: "Ferries run from Sheung Wan (HK Macau Ferry Terminal) or Tsim Sha Tsui (China Ferry Terminal) to various ports in Shenzhen (Shekou) and Guangzhou (Nansha/Pazhou). It offers a relaxed journey without traffic jams."
        };
      default:
        return null;
    }
  };

  const data = getContent();

  if (!data) return <div className="p-8">Method not found</div>;

  return (
    <div className="space-y-8 animate-fade-in">
       <button onClick={() => navigate('/traffic')} className="text-gray-500 hover:text-china-red flex items-center mb-4">
         <i className="ph-arrow-left mr-1"></i> Back to Traffic
       </button>

       <header className="bg-gray-50 p-6 rounded-xl border border-gray-100">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 flex items-center">
          <i className={`ph-duotone ${data.icon} ${data.color} mr-3`}></i>
          {data.title}
        </h1>
        <p className="text-gray-600">Entry method details</p>
      </header>

      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
         <p className="text-lg text-gray-700 leading-relaxed">
           {data.content}
         </p>
         
         <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100 text-sm text-blue-800">
           <strong>Tip:</strong> Always have your passport ready. Even though HK is part of China, crossing the border involves full immigration checks.
         </div>
      </section>
    </div>
  );
};