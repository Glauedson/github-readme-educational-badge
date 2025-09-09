import { sanitizeText } from './validation.utils.js';

export function createImageSection(img, name) {
  if (img) {
    return `
      <defs>
        <clipPath id="imageClip">
          <rect x="0" y="15" width="145" height="145" rx="4" ry="4"/>
        </clipPath>
      </defs>
      <image
        href="${img}"
        x="0" y="15"
        width="145" height="145"
        preserveAspectRatio="xMidYMid slice"
        clip-path="url(#imageClip)"
      />
    `;
  }

  return createPlaceholder(name);
}

function createPlaceholder(name) {
  const displayName = sanitizeText(name, 15);
  
  return `
    <rect x="0" y="15" width="145" height="145" fill="#f8f9fa" stroke="#e9ecef" stroke-width="2" rx="4" ry="4"/>
    <circle cx="72.5" cy="65" r="25" fill="#dee2e6"/>
    <text x="72.5" y="72" font-size="24" fill="#6c757d" text-anchor="middle">🎓</text>
    <text x="72.5" y="95" font-size="12" fill="#6c757d" text-anchor="middle" font-weight="500">
      ${displayName}
    </text>
    <text x="72.5" y="110" font-size="10" fill="#868e96" text-anchor="middle">
      Logo da Instituição
    </text>
  `;
}

export function createBadgeHeader(degree) {
  return `
    <rect x="270" y="0" width="140" height="35" rx="15" ry="15" fill="#D9D9D9"/>
    <image href="https://cdn-icons-png.flaticon.com/512/43/43298.png" x="285" y="8" width="20" height="20" />
    <text x="320" y="22" font-size="12" font-weight="600" fill="#000000ff">
      ${degree}
    </text>
  `;
}

export function createMainContent(course, name) {
  const displayCourse = sanitizeText(course, 25);
  const displayName = sanitizeText(name, 25);
  
  return `
    <text x="160" y="40" font-size="10" font-weight="500" fill="#666666" letter-spacing="1px">
      CURSO
    </text>
    <text x="160" y="57" font-size="14" font-weight="600" fill="#000000">
      ${displayCourse}
    </text>
    
    <text x="160" y="78" font-size="10" font-weight="500" fill="#666666" letter-spacing="1px">
      INSTITUIÇÃO
    </text>
    <text x="160" y="95" font-size="14" font-weight="600" fill="#000000">
      ${displayName}
    </text>
  `;
}

export function createProgressBar(progress) {
  const progressWidth = Math.max((progress / 100) * 215, 0);
  
  return `
    <text x="160" y="125" font-size="10" font-weight="500" fill="#666666">
      CONCLUSÃO:
    </text>
    <text x="375" y="125" font-size="12" font-weight="bold" fill="#4CAF50" text-anchor="end">
      ${progress}%
    </text>
    
    <!-- Progress bar (background) -->
    <rect x="160" y="135" width="215" height="6" fill="#e0e0e0" rx="3" ry="3" />
    
    <!-- Progress bar (filling) -->
    <rect 
      x="160" 
      y="135" 
      width="${progressWidth}" 
      height="6" 
      fill="url(#progressGradient)" 
      rx="3" 
      ry="3" 
    />
  `;
}

export function getSvgDefs() {
  return `
    <defs>
      <filter id="shadow" x="0" y="0.1" width="100%" height="100%">
        <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="rgba(3, 3, 3, 0.18)" />
      </filter>
      <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#4CAF50;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#8BC34A;stop-opacity:1" />
      </linearGradient>
    </defs>
  `;
}

export function getSvgStyles() {
  return `
    <style>
      text {
        font-family: 'Poppins', sans-serif;
      }
    </style>
  `;
}