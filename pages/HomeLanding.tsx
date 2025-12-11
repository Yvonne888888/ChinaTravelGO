import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../services/LanguageContext';

export const HomeLanding: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-8 animate-fade-in">
      <header className="rounded-xl overflow-hidden shadow-lg">
        <div className="relative">
          <img src="/assets/images/shenzhen_skyline.jpg" alt="Shenzhen Skyline" className="w-full h-64 object-cover brightness-75 sm:h-96" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 sm:px-12">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-3">无忧中国之旅</h1>
            <p className="text-base sm:text-lg font-semibold text-white/90 mb-6">支付 · 网络 · 交通 — 一站解决</p>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl justify-center">
              <Link to="/visa" className="flex-1 text-center px-6 py-4 bg-china-red text-white text-lg font-bold rounded-lg shadow-lg hover:scale-105 transition">签证查询</Link>
              <Link to="/currency" className="flex-1 text-center px-6 py-4 bg-white text-china-red text-lg font-bold rounded-lg shadow-lg hover:scale-105 transition">钱 & 网络</Link>
              <Link to="/traffic" className="flex-1 text-center px-6 py-4 bg-white text-china-red text-lg font-bold rounded-lg shadow-lg hover:scale-105 transition">交通指南</Link>
            </div>
            <Link to="/visa" className="mt-4 inline-block px-6 py-3 bg-transparent border border-white/40 text-white rounded-lg text-sm">进入工具页（完整）</Link>
          </div>
        </div>
      </header>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold mb-3">去中国旅行我需不需要签证？</h2>
          <p className="text-sm text-gray-600 mb-4">一键查询你的护照是否需要签证或可否免签/落地签。</p>
          <Link to="/visa" className="block w-full text-center px-4 py-3 bg-china-red text-white font-bold rounded-lg">寻找答案</Link>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold mb-3">钱和网怎么办？</h2>
          <p className="text-sm text-gray-600 mb-4">支付、换汇、SIM卡与翻墙方案，带你一步到位。</p>
          <Link to="/currency" className="block w-full text-center px-4 py-3 bg-china-red text-white font-bold rounded-lg">寻找答案</Link>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold mb-3">路怎么走？</h2>
          <p className="text-sm text-gray-600 mb-4">城市与城际出行、票务与大湾区跨境方案。</p>
          <Link to="/traffic" className="block w-full text-center px-4 py-3 bg-china-red text-white font-bold rounded-lg">寻找答案</Link>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold mb-3">生活和文化如何？</h2>
          <p className="text-sm text-gray-600 mb-4">基础中文、礼仪与美食文化，助你更好融入当地生活。</p>
          <Link to="/culture" className="block w-full text-center px-4 py-3 bg-china-red text-white font-bold rounded-lg">寻找答案</Link>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl text-center">
        <h3 className="text-lg font-extrabold mb-2">下一站：无缝连接香港/澳门的 大湾区探索之旅 (GBA)</h3>
        <p className="text-sm text-gray-600 mb-4">了解从香港/澳门入境、跨城交通与联程出行的最佳方式。</p>
        <Link to="/traffic" className="inline-block px-6 py-3 bg-indigo-700 text-white font-bold rounded-lg">查看大湾区指南</Link>
      </section>
    </div>
  );
};

export default HomeLanding;
