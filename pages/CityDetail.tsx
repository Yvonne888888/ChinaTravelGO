import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CityTransport } from '../types';
import { useLanguage } from '../services/LanguageContext';

export const CityDetail: React.FC = () => {
  const { cityId } = useParams();
  const { language } = useLanguage();
  const [city, setCity] = useState<CityTransport | null>(null);

  useEffect(() => {
    const basePath = import.meta.env.BASE_URL;
    fetch(`${basePath}data/city_data.json`)
      .then((res) => res.json())
      .then((data: CityTransport[]) => {
        const found = data.find(c => c.id === cityId);
        setCity(found || null);
      });
  }, [cityId]);

  if (!city) return <div className="p-8 text-center">Loading city data...</div>;

  return (
    <div className="space-y-6 animate-fade-in">
      <Link to="/traffic" className="inline-flex items-center text-sm text-gray-500 hover:text-china-red mb-2">
        <i className="ph-arrow-left mr-1"></i> Back to Traffic
      </Link>
      
      <header className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">{language === 'en' ? city.name_en : city.name_zh}</h1>
        <p className="text-gray-500">Airport & Transport Guide</p>
      </header>

      {city.airports.map((airport, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
             <h2 className="text-lg font-bold text-gray-800">{airport.name} ({airport.code})</h2>
             <i className="ph-airplane-takeoff text-gray-400 text-xl"></i>
          </div>
          <div className="p-6 space-y-4">
            {airport.transport_options.map((opt, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-start pb-4 last:pb-0 border-b last:border-0 border-gray-100">
                <div className="flex-shrink-0 w-24 font-bold text-sm text-gray-700 mb-1 sm:mb-0">
                  {opt.type}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 mb-1">{opt.description}</p>
                  <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700">
                    Est: {opt.cost_estimate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};