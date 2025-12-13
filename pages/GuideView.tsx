import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GUIDE_DATA } from '../data/guides';

export const GuideView: React.FC = () => {
  const { guideId } = useParams();
  const navigate = useNavigate();
  const guide = guideId ? GUIDE_DATA[guideId] : null;

  if (!guide) {
    return (
      <div className="p-8 text-center animate-fade-in">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Guide Not Found</h2>
        <button onClick={() => navigate(-1)} className="text-china-red hover:underline">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <button onClick={() => navigate(-1)} className="hover:text-china-red flex items-center transition-colors">
          <i className="ph-arrow-left mr-1"></i> Back
        </button>
      </div>

      <header className="border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{guide.title}</h1>
      </header>

      <section className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
        {/* Render HTML content safely since it comes from our trusted local data file */}
        <article 
          className="prose prose-slate prose-headings:text-gray-900 prose-headings:font-bold prose-a:text-china-red prose-strong:text-gray-800 max-w-none 
          prose-p:leading-relaxed prose-li:marker:text-china-red"
          dangerouslySetInnerHTML={{ __html: guide.content }} 
        />
      </section>
    </div>
  );
};