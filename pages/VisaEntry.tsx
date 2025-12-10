import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../services/LanguageContext';
import { VisaPolicy } from '../types';

export const VisaEntry: React.FC = () => {
  const { t } = useLanguage();
  const [policies, setPolicies] = useState<VisaPolicy[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [result, setResult] = useState<VisaPolicy | null>(null);

  useEffect(() => {
    fetch('./data/visa_policies.json')
      .then((res) => res.json())
      .then((data) => {
        // Sort: Visa Free first
        const sorted = data.sort((a: VisaPolicy, b: VisaPolicy) => {
           if (a.requirement.includes('Free') && !b.requirement.includes('Free')) return -1;
           if (!a.requirement.includes('Free') && b.requirement.includes('Free')) return 1;
           return a.country_name.localeCompare(b.country_name);
        });
        setPolicies(sorted);
      })
      .catch((err) => console.error('Error loading visa data:', err));
  }, []);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = e.target.value;
    setSelectedCountry(code);
    const found = policies.find((p) => p.country_code === code) || null;
    setResult(found);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="bg-red-50 p-6 rounded-xl border border-red-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <i className="ph-duotone ph-passport text-china-red mr-3"></i>
          {t('visa.title')}
        </h1>
        <p className="text-gray-600">{t('visa.subtitle')}</p>
      </header>

      {/* Visa Checker Card */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">{t('visa.checker_title')}</h2>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Your Passport Country
          </label>
          <div className="relative">
            <select
              className="block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-china-red focus:border-china-red sm:text-sm rounded-md border"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="">-- Select Country (Sorted by Visa Free Status) --</option>
              {policies.map((p) => (
                <option key={p.country_code} value={p.country_code}>
                  {p.country_name} {p.requirement.includes('Free') ? '✨ (Visa Free)' : ''}
                </option>
              ))}
            </select>
          </div>
        </div>

        {result && (
          <div className="space-y-6">
            {/* Primary Status */}
            <div className={`rounded-lg p-5 border ${result.requirement.includes('Free') ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}`}>
              <div className="flex items-start">
                <div className={`flex-shrink-0 p-2 rounded-full ${result.requirement.includes('Free') ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                  <i className={`text-2xl ${result.requirement.includes('Free') ? 'ph-check-circle' : 'ph-warning-circle'}`}></i>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">{result.requirement}</h3>
                  <p className="mt-1 text-base text-gray-800 font-semibold">Max Duration: {result.duration}</p>
                  <p className="mt-2 text-sm text-gray-600">{result.notes}</p>
                  
                  {result.apply_link && (
                    <a href={result.apply_link} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center text-sm font-medium text-china-red hover:underline">
                      Official Application Link <i className="ph-arrow-right ml-1"></i>
                    </a>
                  )}

                  {/* Warning for Visa Free */}
                  {result.requirement.includes('Free') && (
                    <div className="mt-4 p-3 bg-white border border-yellow-200 rounded text-sm text-yellow-800 shadow-sm">
                      <strong className="block mb-1 flex items-center">
                        <i className="ph-warning-diamond text-lg mr-1 text-yellow-600"></i> 
                        Passport Validity Warning
                      </strong>
                      Airlines may refuse boarding if your passport has less than 6 months validity remaining. It is strongly recommended to travel with a passport valid for at least 6 months to avoid being denied entry.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Transit Policy Section */}
            {result.transit_policy && (
               <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                 <div className="flex items-start mb-4">
                   <div className="flex-shrink-0 p-2 rounded-full bg-blue-100 text-blue-600">
                     <i className="ph-airplane-in-flight text-2xl"></i>
                   </div>
                   <div className="ml-4">
                     <h3 className="text-lg font-bold text-gray-900">Regional / Transit Policy</h3>
                     <p className="mt-1 text-sm text-gray-600">{result.transit_policy}</p>
                   </div>
                 </div>
                 
                 <div className="ml-0 sm:ml-14 grid sm:grid-cols-2 gap-3">
                    <Link to="/guide/transit-visa-guide" className="flex items-center justify-center px-4 py-2 border border-blue-300 rounded-md bg-white text-sm font-medium text-blue-700 hover:bg-blue-50">
                       <i className="ph-book-open mr-2"></i> Detailed Policy Guide
                    </Link>
                    <Link to="/guide/transit-visa-qa" className="flex items-center justify-center px-4 py-2 border border-blue-300 rounded-md bg-white text-sm font-medium text-blue-700 hover:bg-blue-50">
                       <i className="ph-question mr-2"></i> Transit Q&A
                    </Link>
                 </div>
               </div>
            )}
          </div>
        )}
      </section>

      {/* Customs & Quarantine */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col">
          <div className="flex items-center mb-4">
             <i className="ph-duotone ph-suitcase text-2xl text-blue-600 mr-2"></i>
             <h2 className="text-xl font-semibold">{t('visa.customs_title')}</h2>
          </div>
          <ul className="space-y-3 text-sm text-gray-600 mb-6 flex-grow">
            <li className="flex items-start">
              <i className="ph-caret-right mt-1 mr-2 text-gray-400"></i>
              Declare cash over 20,000 CNY or 5,000 USD.
            </li>
            <li className="flex items-start">
              <i className="ph-caret-right mt-1 mr-2 text-gray-400"></i>
              Declare expensive electronics for re-export.
            </li>
          </ul>
          <Link to="/guide/customs-guide" className="mt-auto w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100">
             <i className="ph-book-open mr-2"></i> View Customs Guide
          </Link>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col">
          <div className="flex items-center mb-4">
             <i className="ph-duotone ph-prohibit text-2xl text-red-600 mr-2"></i>
             <h2 className="text-xl font-semibold">{t('visa.prohibited_title')}</h2>
          </div>
           <ul className="space-y-3 text-sm text-gray-600 mb-6 flex-grow">
            <li className="flex items-start">
              <i className="ph-x-circle mt-1 mr-2 text-red-400"></i>
              Drugs, weapons, explosives (Strictly Prohibited).
            </li>
            <li className="flex items-start">
              <i className="ph-x-circle mt-1 mr-2 text-red-400"></i>
              Psychotropic medicines without prescription.
            </li>
            <li className="flex items-start">
              <i className="ph-x-circle mt-1 mr-2 text-red-400"></i>
              Fresh fruit, vegetables, and raw meat.
            </li>
          </ul>
          <Link to="/guide/prohibited-items" className="mt-auto w-full flex items-center justify-center px-4 py-2 border border-red-200 rounded-md bg-red-50 text-sm font-medium text-red-700 hover:bg-red-100">
             <i className="ph-book-open mr-2"></i> View Prohibited List
          </Link>
        </div>
      </section>
    </div>
  );
};