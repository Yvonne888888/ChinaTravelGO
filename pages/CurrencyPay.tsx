import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../services/LanguageContext';

export const CurrencyPay: React.FC = () => {
  const { t } = useLanguage();
  const [amount, setAmount] = useState<number>(100);
  const [rate, setRate] = useState<number>(7.2); // Default fallback
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
          {t('currency.title')}
        </h1>
        <p className="text-gray-600">{t('currency.subtitle')}</p>
      </header>

      {/* Converter */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Currency Converter</h2>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1 w-full">
            <label className="block text-xs font-medium text-gray-500 mb-1">From ({currency})</label>
            <div className="flex">
               <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-china-red focus:border-china-red block p-2.5"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-china-red focus:border-china-red block w-full p-2.5"
              />
            </div>
          </div>
          <div className="text-gray-400">
            <i className="ph-arrows-left-right text-2xl rotate-90 md:rotate-0"></i>
          </div>
          <div className="flex-1 w-full">
             <label className="block text-xs font-medium text-gray-500 mb-1">To (CNY)</label>
             <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-500 font-bold">¥</span>
                </div>
                <input 
                  type="text" 
                  readOnly 
                  value={converted} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-8 p-2.5" 
                />
             </div>
          </div>
        </div>
      </section>

      {/* Payment Guides */}
      <section className="grid md:grid-cols-2 gap-6">
        {/* WeChat Pay */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <i className="ph-chat-circle-dots text-8xl text-green-600"></i>
          </div>
          <h3 className="text-xl font-bold text-green-700 mb-2">WeChat Pay</h3>
          <p className="text-sm text-gray-600 mb-4">Essential for daily life. Used for restaurants, convenience stores, and taxis.</p>
          <Link to="/guide/wechat-pay-guide" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            <i className="ph-book-open mr-2"></i> View Setup Guide
          </Link>
        </div>

        {/* Alipay */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-10">
             <i className="ph-qr-code text-8xl text-blue-600"></i>
          </div>
          <h3 className="text-xl font-bold text-blue-600 mb-2">Alipay</h3>
          <p className="text-sm text-gray-600 mb-4">Widely accepted. Often easier for foreigners to link international credit cards.</p>
          <Link to="/guide/alipay-guide" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <i className="ph-book-open mr-2"></i> View Setup Guide
          </Link>
        </div>
      </section>

      {/* Bank Exchange */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center mb-4">
           <i className="ph-bank text-3xl text-gray-700 mr-3"></i>
           <h2 className="text-xl font-bold text-gray-900">Bank Currency Exchange</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
           <div className="text-sm text-gray-600 space-y-2">
             <p>While digital payments are dominant, carrying some cash is useful. You can exchange currency at major banks (Bank of China, ICBC, etc.).</p>
             <p><strong>Requirement:</strong> You must present your original passport.</p>
           </div>
           <Link to="/guide/bank-exchange-guide" className="flex-shrink-0 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100">
              <i className="ph-book-open mr-2"></i> How to Exchange Cash
           </Link>
        </div>
      </section>
    </div>
  );
};