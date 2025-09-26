'use client';

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../translations';

export default function SimpleLanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en' as Language, name: t('languages.en'), flag: '🇺🇸' },
    { code: 'rw' as Language, name: t('languages.rw'), flag: '🇷🇼' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };


  return (
    <div className="relative z-[9999]"> 
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors relative z-[9999]" // Added z-index to button
        aria-label="Change language"
      >
        <span>{currentLanguage?.flag}</span>
        <span className="hidden sm:block">{currentLanguage?.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
    <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-[9999]">
          {/* Backdrop - moved before dropdown for proper layering */}
          <div
            className="fixed inset-0 z-[9997]"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown with higher z-index */}
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-[9998]">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                  language === lang.code ? 'bg-gray-50 font-medium' : ''
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}