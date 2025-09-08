export function badgeSvg({ name, course, degree, progress, imgBase64, degreeIcon }) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="410" height="173" >
        <style>
            text {
              font-family: 'Poppins', sans-serif;
            }
        </style>  

        <defs>
            <filter id="shadow" x="0" y="0.1" width="100%" height="100%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="rgba(3, 3, 3, 0.18)" />
            </filter>
        </defs>

        <rect x="0" y="15" width="400" height="145" rx="8" ry="8" fill="#ffffffff" filter="url(#shadow)"/>
      
        <rect x="270" y="0" width="140" height="35" rx="15" ry="15" fill="#D9D9D9"/>
        <image href="${degreeIcon}" x="285" y="8" width="20" height="20" />
        <text x="320" y="22" font-size="12" font-weight="regular" fill="#000000ff">${degree}</text>

        <!-- University logo -->
        ${imgBase64 ? `<image 
          href="${imgBase64}" 
          x="0" y="15" 
          width="145" height="145" 
          preserveAspectRatio="xMidYMid slice" 
        />` : ""}

        <!-- Main text -->
        <text x="160" y="40" font-size="10" font-weight="regular" fill="#424242">CURSO</text>
        <text x="160" y="57" font-size="14" font-weight="regular" fill="#000000ff">${course}</text>

        <text x="160" y="78" font-size="10" font-weight="regular" fill="#424242">FACULDADE</text>
        <text x="160" y="95" font-size="14" font-weight="regular" fill="#000000ff">${name}</text>

        <!-- Progress text -->
        <text x="160" y="125" font-size="10" fill="#333">CONCLUSÃO:</text>
        <text x="375" y="125" font-size="10" fill="#333" text-anchor="end">${progress}%</text>

        <!-- Progress bar background -->
        <rect x="160" y="135" width="215" height="5" fill="#ddd" rx="2.5" ry="2.5" />

        <!-- Progress bar -->
        <rect x="160" y="135" width="${(progress / 100) * 215}" height="5" fill="#4CAF50" rx="2.5" ry="2.5" />
    </svg>
  `;
}
