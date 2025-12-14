import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../services/LanguageContext';

export const MoneyPay: React.FC = () => {
  const { t } = useLanguage();
  const [amount, setAmount] = useState<number>(100);
  const [rate, setRate] = useState<number>(7.2);
  const [currency, setCurrency] = useState('USD');
  
  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/CNY')
      .then(res => res.json())
      .then(data => {
        const usdRate = data.rates[currency];
        if (usdRate) setRate(1 / usdRate); 
      })
      .catch(() => {
        if (currency === 'USD') setRate(7.2);
        if (currency === 'EUR') setRate(7.8);
        if (currency === 'GBP') setRate(9.1);
      });
  }, [currency]);

  const converted = (amount * rate).toFixed(2);

  return (
    <div className="space-y-8 animate-fade-in">
       <header className="bg-amber-50 p-6 rounded-xl border border-amber-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
          <i className="ph-duotone ph-currency-cny text-china-gold mr-3"></i>
          {t('money.title')}
        </h1>
        <p className="text-gray-600">{t('money.subtitle')}</p>
      </header>

      {/* Payment Guides */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">{t('money.payment_guide')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* WeChat Pay */}
          <div className="p-5 bg-green-50 rounded-lg border border-green-100 relative">
            <i className="ph-chat-circle-dots text-5xl text-green-600 absolute top-4 right-4 opacity-20"></i>
            <h3 className="text-xl font-bold text-green-800 mb-2">{t('money.wechat_title')}</h3>
            <p className="text-sm text-gray-600 mb-4">{t('money.wechat_desc')}</p>
            <Link to="/guide/wechat-pay-guide" className="inline-flex items-center text-sm font-bold text-green-700 hover:underline">
              {t('money.view_setup')} <i className="ph-arrow-right ml-1"></i>
            </Link>
          </div>

          {/* Alipay */}
          <div className="p-5 bg-blue-50 rounded-lg border border-blue-100 relative">
             <i className="ph-qr-code text-5xl text-blue-600 absolute top-4 right-4 opacity-20"></i>
            <h3 className="text-xl font-bold text-blue-800 mb-2">{t('money.alipay_title')}</h3>
            <p className="text-sm text-gray-600 mb-4">{t('money.alipay_desc')}</p>
            <Link to="/guide/alipay-guide" className="inline-flex items-center text-sm font-bold text-blue-700 hover:underline">
              {t('money.view_setup')} <i className="ph-arrow-right ml-1"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Converter */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">{t('money.converter')}</h2>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1 w-full">
            <label className="block text-xs font-medium text-gray-500 mb-1">{t('money.from')} ({currency})</label>
            <div className="flex">
               <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-amber-500 focus:border-amber-500 block p-2.5"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
                <option value="CAD">CAD</option>
              </select>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5"
              />
            </div>
          </div>
          <div className="text-gray-400">
            <i className="ph-arrows-left-right text-2xl rotate-90 md:rotate-0"></i>
          </div>
          <div className="flex-1 w-full">
             <label className="block text-xs font-medium text-gray-500 mb-1">{t('money.to')} (CNY)</label>
             <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-500 font-bold">¥</span>
                </div>
                <input 
                  type="text" 
                  readOnly 
                  value={converted} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-bold rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full pl-8 p-2.5" 
                />
             </div>
          </div>
        </div>
      </section>

      {/* Cash Exchange */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center mb-4">
           <i className="ph-bank text-3xl text-gray-700 mr-3"></i>
           <h2 className="text-xl font-bold text-gray-900">{t('money.cash_title')}</h2>
        </div>
        <div className="space-y-4 text-sm text-gray-600">
           <p><strong>Cash:</strong> {t('money.cash_info')}</p>
           <p><strong>Cards:</strong> {t('money.cards_info')}</p>
           <div className="pt-2">
             <Link to="/guide/bank-exchange-guide" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100">
                <i className="ph-book-open mr-2"></i> {t('money.exchange_guide')}
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
};