import { 
  createImageSection, 
  createBadgeHeader, 
  createMainContent, 
  createProgressBar,
  getSvgDefs,
  getSvgStyles
} from "../utils/svg.utils.js";

export function badgeSvg({ name, course, degree, progress, img }) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="410" height="173">
      ${getSvgStyles()}
      ${getSvgDefs()}
      
      <!-- Background card -->
      <rect x="0" y="15" width="400" height="145" rx="8" ry="8" fill="#ffffff" filter="url(#shadow)"/>
      
      <!-- Badge degree -->
      ${createBadgeHeader(degree)}
      
      <!-- img or placeholder -->
      ${createImageSection(img, name)}
      
      <!-- Info user -->
      ${createMainContent(course, name)}
      
      <!-- Progress bar -->
      ${createProgressBar(progress)}
    </svg>
  `;
}