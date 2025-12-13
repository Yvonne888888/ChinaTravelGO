import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { LanguageProvider, useLanguage } from './services/LanguageContext';

// Pages
import { HomeMenu } from './pages/HomeMenu';
import { VisaEntry } from './pages/VisaEntry';
import { MoneyPay } from './pages/MoneyPay';
import { TransportConnect } from './pages/TransportConnect';
import { LanguageCulture } from './pages/LanguageCulture';
import { EssentialsSafety } from './pages/EssentialsSafety';
import { GbaExploration } from './pages/GbaExploration';

import { GuideView } from './pages/GuideView';
import { NotFound } from './pages/NotFound';
import { HkEntryDetail } from './pages/HkEntryDetail';
import { CityDetail } from './pages/CityDetail';

const FooterContent = () => {
    const { t } = useLanguage();
    return (
        <div className="max-w-7xl mx-auto py-8 px-4 overflow-hidden sm:px-6 lg:px-8">
            <div className="text-center mb-6">
                <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">{t('footer.questions')}</h3>
                <p className="mt-2 text-base text-gray-500">
                    {t('footer.contact')} <br />
                    <a href="mailto:help@chinatravelertoolkit.com" className="text-china-red hover:underline font-medium">help@chinatravelertoolkit.com</a>
                </p>
            </div>
            <p className="text-center text-xs text-gray-400 border-t border-gray-100 pt-6">
                &copy; 2024 China Traveler Toolkit. Mobile-First Utility.
            </p>
        </div>
    );
};

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
          <Navbar />
          <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              {/* Home Menu as Index */}
              <Route path="/" element={<HomeMenu />} />
              
              {/* Main Categories */}
              <Route path="/visa" element={<VisaEntry />} />
              <Route path="/money" element={<MoneyPay />} />
              <Route path="/transport" element={<TransportConnect />} />
              <Route path="/language" element={<LanguageCulture />} />
              <Route path="/essentials" element={<EssentialsSafety />} />

              {/* Sub-pages and Details */}
              <Route path="/gba" element={<GbaExploration />} />
              <Route path="/traffic/hk-entry/:methodId" element={<HkEntryDetail />} />
              <Route path="/traffic/:cityId" element={<CityDetail />} />
              
              {/* Dynamic Guide Route */}
              <Route path="/guide/:guideId" element={<GuideView />} />

              {/* Legacy Redirects (for safety) */}
              <Route path="/currency" element={<Navigate to="/money" replace />} />
              <Route path="/traffic" element={<Navigate to="/transport" replace />} />
              <Route path="/internet" element={<Navigate to="/transport" replace />} />
              <Route path="/safety" element={<Navigate to="/essentials" replace />} />
              <Route path="/shopping" element={<Navigate to="/essentials" replace />} />
              
              {/* 404 Handler */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <footer className="bg-white border-t border-gray-200 mt-12">
            <FooterContent />
          </footer>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;