export function validateBadgeParams({ name, course, degree, progress }) {
  const errors = [];

  if (!name?.trim()) {
    errors.push('name is required');
  }

  if (!course?.trim()) {
    errors.push('course is required');
  }

  if (!degree?.trim()) {
    errors.push('degree is required');
  }

  if (!progress) {
    errors.push('progress is required');
  }

  return errors;
}

export function validateProgress(progress) {
  const progressNum = parseInt(progress);
  
  if (isNaN(progressNum) || progressNum < 0 || progressNum > 100) {
    return {
      isValid: false,
      error: 'Progress must be a number between 0 and 100'
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