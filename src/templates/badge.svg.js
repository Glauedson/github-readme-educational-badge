export function badgeSvg({ name, course, degree, progress, img }) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="180" >
        <style>
            text {
            font-family: 'Poppins', sans-serif;
            }
        </style>  
    
        <defs>
            <filter id="shadow" x="0" y="0" width="250%" height="250%">
                <feDropShadow dx="0" dy="0" stdDeviation="8" flood-color="rgba(3, 3, 3, 0.57)" />
            </filter>
        </defs>

      <rect x="0" y="0" width="400" height="145" rx="8" ry="8" fill="#FFFFFF" filter="url(#shadow)"/>
      
      <!-- University logo -->
      ${img ? `<image 
        href="${img}" 
        x="0" y="0" 
        width="145" height="145" 
        preserveAspectRatio="xMidYMid slice" 
      />` : ""}

      <!-- Main text -->
      <text x="160" y="25" font-size="10" font-weight="regular" fill="#424242">CURSO</text>
      <text x="160" y="42" font-size="14" font-weight="regular" fill="#000000ff">${course}</text>

      <text x="160" y="63" font-size="10" font-weight="regular" fill="#424242">FACULDADE</text>
      <text x="160" y="80" font-size="14" font-weight="regular" fill="#000000ff">${name}</text>


      <!-- Texto -->
      <text x="160" y="110" font-family="Poppins, sans-serif" font-size="10" fill="#333">
        CONCLUSÃO:
      </text>
      <text x="375" y="110" font-family="Poppins, sans-serif" font-size="10" fill="#333" text-anchor="end">
        ${progress}
      </text>

      <!-- Barra de fundo -->
     <rect x="160" y="120" width="215" height="5" fill="#ddd" rx="2.5" ry="2.5" />

     <!-- Barra de progresso -->
     <rect x="160" y="120" width="200" height="5" fill="#4CAF50" rx="2.5" ry="2.5" />
     </svg>
  `;
}





