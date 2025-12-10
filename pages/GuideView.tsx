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
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <button onClick={() => navigate(-1)} className="hover:text-china-red flex items-center">
          <i className="ph-arrow-left mr-1"></i> Back
        </button>
      </div>

      <header className="border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">{guide.title}</h1>
      </header>

      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="prose prose-red max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
          {guide.content}
        </div>
      </section>

      <div className="flex justify-center pt-8">
        <a 
          href={guide.pdfUrl} 
          download 
          className="flex items-center px-6 py-3 bg-china-red text-white font-bold rounded-lg shadow hover:bg-red-700 transition"
        >
          <i className="ph-file-pdf text-xl mr-2"></i>
          Download Printable PDF
        </a>
      </div>
    </div>
  );
};