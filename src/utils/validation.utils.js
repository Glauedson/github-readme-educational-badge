import { getTranslation, getDefaultLanguage } from './i18n.utils.js';

export function validateBadgeParams({ name, course, degree, progress }, language = getDefaultLanguage()) {
  const errors = [];

  if (!name?.trim()) {
    errors.push(getTranslation(language, 'errors.nameRequired'));
  }
  if (!course?.trim()) {
    errors.push(getTranslation(language, 'errors.courseRequired'));
  }
  if (!degree?.trim()) {
    errors.push(getTranslation(language, 'errors.degreeRequired'));
  }
  if (!progress) {
    errors.push(getTranslation(language, 'errors.progressRequired'));
  }
  
  return errors;
}

export function validateProgress(progress, language = getDefaultLanguage()) {
  const progressNum = parseInt(progress);
  
  if (isNaN(progressNum) || progressNum < 0 || progressNum > 100) {
    return {
      isValid: false,
      error: getTranslation(language, 'errors.invalidProgress')
    };
  }
  
  return {
    isValid: true,
    value: progressNum
  };
}

export function sanitizeText(text, maxLength = 25) {
  if (!text) return '';
  const cleaned = text.trim();
  return cleaned.length > maxLength
    ? cleaned.substring(0, maxLength) + '...'
    : cleaned;
}