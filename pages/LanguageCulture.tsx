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
               <h3 className="font-bold">Google Translate</h3>
               <p className="text-xs text-gray-500 mt-1">Requires VPN. Best for live camera translation.</p>
            </div>
            
            <div className="p-4 border rounded-lg flex flex-col items-center text-center hover:bg-gray-50 transition">
               <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-2">
                  <span className="font-bold text-indigo-600">iF</span>
               </div>
               <h3 className="font-bold">iFlytek (讯飞翻译)</h3>
               <p className="text-xs text-gray-500 mt-1">Local favorite. Extremely accurate for voice/speech translation.</p>
            </div>

            <div className="p-4 border rounded-lg flex flex-col items-center text-center hover:bg-gray-50 transition">
               <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                  <span className="font-bold text-green-600">W</span>
               </div>
               <h3 className="font-bold">WeChat</h3>
               <p className="text-xs text-gray-500 mt-1">Long-press messages to translate. Scan menus.</p>
            </div>
         </div>
      </section>

      {/* Survival Phrases */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
         <h2 className="text-xl font-bold text-gray-900 mb-4">{t('language.phrases')}</h2>
         <div className="space-y-2">
            {[
              { en: "Hello", zh: "Nǐ hǎo (你好)" },
              { en: "Thank you", zh: "Xiè xiè (谢谢)" },
              { en: "Bathroom?", zh: "Cè suǒ? (厕所?)" },
              { en: "How much?", zh: "Duō shǎo qián? (多少钱?)" },
              { en: "I don't understand", zh: "Tīng bù dǒng (听不懂)" },
              { en: "Bill, please", zh: "Mǎi dān (买单)" }
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
               <span><strong>Respect Elders:</strong> Use both hands when giving/receiving items (cards, tea).</span>
            </li>
            <li className="flex items-start">
               <i className="ph-check-circle text-green-500 mr-2 mt-0.5"></i>
               <span><strong>Table Manners:</strong> Tap the table with two fingers to say 'thanks' for tea pouring.</span>
            </li>
             <li className="flex items-start">
               <i className="ph-x-circle text-red-500 mr-2 mt-0.5"></i>
               <span><strong>Chopsticks:</strong> Never stick them vertically in rice (resembles funeral incense).</span>
            </li>
            <li className="flex items-start">
               <i className="ph-x-circle text-red-500 mr-2 mt-0.5"></i>
               <span><strong>Face:</strong> Avoid public confrontation or causing someone to lose face (be polite/indirect).</span>
            </li>
         </ul>
      </section>
    </div>
  );
};