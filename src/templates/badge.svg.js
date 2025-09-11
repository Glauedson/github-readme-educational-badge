import {
  createImageSection,
  createBadgeHeader,
  createMainContent,
  createProgressBar,
  getSvgDefs,
  getSvgStyles
} from "../utils/svg.utils.js";

export function badgeSvg({ name, course, degree, progress, img, language }) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="410" height="173">
    ${getSvgStyles()}
    ${getSvgDefs()}
    <!-- Background card -->
    <rect x="0" y="0" width="400" height="160" rx="8" ry="8"
    fill="#ffffffff" filter="url(#shadow)"/>
    <!-- Badge degree -->
    ${createBadgeHeader(degree)}
    <!-- Image or placeholder -->
    ${createImageSection(img, name, language)}
    <!-- User info -->
    ${createMainContent(course, name, language)}
    <!-- Progress bar -->
    ${createProgressBar(progress, language)}
    </svg>
  `;
}