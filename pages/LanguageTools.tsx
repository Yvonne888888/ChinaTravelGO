import React from 'react';
import { useState } from 'react';

const PHRASES: Array<{en:string, zh:string}> = [
  { en: 'Hello', zh: '你好 (Nǐ hǎo)' },
  { en: 'Thank you', zh: '谢谢 (Xièxiè)' },
  { en: 'How much?', zh: '多少钱？(Duōshǎo qián?)' },
  { en: 'Where is the restroom?', zh: '洗手间在哪里？(Xǐshǒujiān zài nǎlǐ?)' },
  { en: 'I need help', zh: '我需要帮助 (Wǒ xūyào bāngzhù)' },
  { en: 'I don\'t understand', zh: '我不明白 (Wǒ bù míngbái)' },
];

export const LanguageTools: React.FC = () => {
  const [query, setQuery] = useState('');

  const lookup = PHRASES.filter(p => p.en.toLowerCase().includes(query.toLowerCase()) || p.zh.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Language & Etiquette</h1>
        <p className="text-gray-600">基础中文短语与礼仪小贴士 — 方便旅行时快速沟通。</p>
      </header>

      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">搜索短语 / Search phrase</label>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="e.g. Thank you / 谢谢" className="w-full p-2 border rounded" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {lookup.map((p, idx) => (
            <div key={idx} className="p-4 border rounded-lg">
              <div className="font-bold text-gray-800">{p.en}</div>
              <div className="text-sm text-gray-600">{p.zh}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-bold mb-3">礼仪小贴士 / Etiquette</h2>
        <ul className="list-disc pl-5 text-sm text-gray-600">
          <li>与人见面常用握手或点头致意。</li>
          <li>用餐时可用双手传递礼物或物品以示尊重。</li>
          <li>公共场合保持低声，尊重他人。</li>
        </ul>
      </section>
    </div>
  );
};

export default LanguageTools;
