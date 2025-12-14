import React from 'react';
import { useLanguage } from '../services/LanguageContext';

export const LanguageCulture: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="bg-purple-50 p-6 rounded-xl border border-purple-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <i className="ph-duotone ph-translate text-purple-600 mr-3"></i>
          {t('language.title')}
        </h1>
        <p className="text-gray-600">{t('language.subtitle')}</p>
      </header>

      {/* Translation Apps */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
         <h2 className="text-xl font-bold text-gray-900 mb-4">{t('language.apps')}</h2>
         <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg flex flex-col items-center text-center hover:bg-gray-50 transition">
               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <span className="font-bold text-blue-600">G</span>
               </div>
               <h3 className="font-bold">{t('language.google_translate')}</h3>
               <p className="text-xs text-gray-500 mt-1">{t('language.google_desc')}</p>
            </div>
            
            <div className="p-4 border rounded-lg flex flex-col items-center text-center hover:bg-gray-50 transition">
               <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                  <span className="font-bold text-indigo-600">iF</span>
               </div>
               <h3 className="font-bold">{t('language.iflytek')}</h3>
               <p className="text-xs text-gray-500 mt-1">{t('language.iflytek_desc')}</p>
            </div>

            <div className="p-4 border rounded-lg flex flex-col items-center text-center hover:bg-gray-50 transition">
               <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <span className="font-bold text-green-600">W</span>
               </div>
               <h3 className="font-bold">{t('language.wechat')}</h3>
               <p className="text-xs text-gray-500 mt-1">{t('language.wechat_desc')}</p>
            </div>
         </div>
      </section>

      {/* Survival Phrases */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
         <h2 className="text-xl font-bold text-gray-900 mb-4">{t('language.phrases')}</h2>
         <div className="space-y-2">
            {[
              { en: t('language.phrase.hello'), zh: t('language.phrase.hello_zh') },
              { en: t('language.phrase.thanks'), zh: t('language.phrase.thanks_zh') },
              { en: t('language.phrase.bathroom'), zh: t('language.phrase.bathroom_zh') },
              { en: t('language.phrase.howmuch'), zh: t('language.phrase.howmuch_zh') },
              { en: t('language.phrase.understand'), zh: t('language.phrase.understand_zh') },
              { en: t('language.phrase.bill'), zh: t('language.phrase.bill_zh') }
            ].map((phrase, idx) => (
               <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded border-b border-gray-100 last:border-0">
                  <span className="font-medium text-gray-700">{phrase.en}</span>
                  <span className="font-bold text-purple-700">{phrase.zh}</span>
               </div>
            ))}
         </div>
      </section>

      {/* Etiquette & Taboos */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
         <h2 className="text-xl font-bold text-gray-900 mb-4">{t('language.etiquette')}</h2>
         <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start">
               <i className="ph-check-circle text-green-500 mr-2 mt-0.5"></i>
               <span>{t('language.etiquette.respect')}</span>
            </li>
            <li className="flex items-start">
               <i className="ph-check-circle text-green-500 mr-2 mt-0.5"></i>
               <span>{t('language.etiquette.table')}</span>
            </li>
             <li className="flex items-start">
               <i className="ph-x-circle text-red-500 mr-2 mt-0.5"></i>
               <span>{t('language.etiquette.chopsticks')}</span>
            </li>
            <li className="flex items-start">
               <i className="ph-x-circle text-red-500 mr-2 mt-0.5"></i>
               <span>{t('language.etiquette.face')}</span>
            </li>
         </ul>
      </section>
    </div>
  );
};