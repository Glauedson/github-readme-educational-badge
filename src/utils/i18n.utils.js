import { translations } from "../translations/translations.js";

// Default language
const DEFAULT_LANGUAGE = 'en';

// Get supported languages dynamically from translations
const SUPPORTED_LANGUAGES = Object.keys(translations);

export function getTranslation(language, key) {
  // Validate language
  if (!SUPPORTED_LANGUAGES.includes(language)) {
    language = DEFAULT_LANGUAGE;
  }

  // Get nested translation using dot notation
  const keys = key.split('.');
  let translation = translations[language];
  
  for (const k of keys) {
    if (translation && typeof translation === 'object') {
      translation = translation[k];
    } else {
      return key; 
    }
  }
  
  return translation || key;
}

export function isValidLanguage(language) {
  return SUPPORTED_LANGUAGES.includes(language);
}

export function getDefaultLanguage() {
  return DEFAULT_LANGUAGE;
}

export function getSupportedLanguages() {
  return [...SUPPORTED_LANGUAGES];
}