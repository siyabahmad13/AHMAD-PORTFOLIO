const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// 1. About Workspace Placeholder
const aboutWorkspaceSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 800" width="100%" height="100%">
  <rect width="1000" height="800" fill="#171716"/>
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#222220" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1000" height="800" fill="url(#grid)" />
  <line x1="100" y1="580" x2="900" y2="580" stroke="#333330" stroke-width="2"/>
  <rect x="250" y="220" width="500" height="300" rx="8" fill="#1e1e1c" stroke="#383834" stroke-width="2"/>
  <rect x="265" y="235" width="470" height="270" rx="4" fill="#0d0d0c"/>
  <rect x="475" y="520" width="50" height="60" fill="#2a2a28"/>
  <rect x="420" y="575" width="160" height="8" rx="2" fill="#383835"/>
  <text x="100" y="730" fill="#666662" font-family="monospace" font-size="12" letter-spacing="2">SYSTEMS &amp; ARCHITECTURE · DIGITAL WORKSPACE</text>
</svg>`;
fs.writeFileSync(path.join(imagesDir, 'about-workspace.svg'), aboutWorkspaceSvg);

// 2. The Pakhtoon
const thePakhtoonSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
  <rect width="1200" height="800" fill="#141413"/>
  <rect x="40" y="40" width="1120" height="720" rx="8" fill="#1a1a18" stroke="#2c2c28" stroke-width="1"/>
  <rect x="40" y="40" width="1120" height="60" rx="8" fill="#20201d"/>
  <circle cx="75" cy="70" r="5" fill="#383834"/>
  <circle cx="95" cy="70" r="5" fill="#383834"/>
  <circle cx="115" cy="70" r="5" fill="#383834"/>
  <rect x="150" y="55" width="400" height="30" rx="4" fill="#151514" stroke="#2c2c28" stroke-width="1"/>
  <text x="170" y="74" fill="#7A9E7E" font-family="monospace" font-size="12">thepakhtoon.com/learn</text>
  <rect x="80" y="140" width="1040" height="200" rx="6" fill="#161615" stroke="#282824" stroke-width="1"/>
  <text x="120" y="195" fill="#F5F5F2" font-family="sans-serif" font-size="34" font-weight="700">THE PAKHTOON</text>
  <text x="120" y="235" fill="#888882" font-family="sans-serif" font-size="18">Learning Platform for Practical Web Development Education</text>
  <line x1="120" y1="265" x2="320" y2="265" stroke="#7A9E7E" stroke-width="3"/>
</svg>`;
fs.writeFileSync(path.join(imagesDir, 'the-pakhtoon.svg'), thePakhtoonSvg);

// 3. Problos Venture
const problosVentureSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
  <rect width="1200" height="800" fill="#0d0d0c"/>
  <rect x="40" y="40" width="1120" height="720" rx="8" fill="#121211" stroke="#262624" stroke-width="1.5"/>
  <text x="120" y="240" fill="#7A9E7E" font-family="monospace" font-size="14" letter-spacing="4">PROBLOS · SOFTWARE VENTURE</text>
  <text x="120" y="320" fill="#F5F5F2" font-family="sans-serif" font-size="48" font-weight="700">ENGINEERED FOR IMPACT</text>
  <text x="120" y="380" fill="#999990" font-family="sans-serif" font-size="20">Software systems, web platforms and AI solutions designed for high reliability.</text>
</svg>`;
fs.writeFileSync(path.join(imagesDir, 'problos-venture.svg'), problosVentureSvg);

// 4. Certifications
function generateCertSvg(issuer, title, code) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="100%" height="100%">
  <rect width="1000" height="700" fill="#181816"/>
  <rect x="30" y="30" width="940" height="640" rx="4" fill="#1f1f1d" stroke="#333330" stroke-width="1.5"/>
  <text x="500" y="160" text-anchor="middle" fill="#7A9E7E" font-family="monospace" font-size="16" letter-spacing="4">${issuer.toUpperCase()}</text>
  <text x="500" y="240" text-anchor="middle" fill="#888882" font-family="sans-serif" font-size="14">THIS CERTIFIES COMPLETION OF</text>
  <text x="500" y="310" text-anchor="middle" fill="#F5F5F2" font-family="sans-serif" font-size="34" font-weight="700">${title}</text>
  <text x="500" y="420" text-anchor="middle" fill="#F5F5F2" font-family="sans-serif" font-size="24" font-weight="600">SIAB AHMAD KHAN</text>
  <text x="270" y="575" text-anchor="middle" fill="#999990" font-family="monospace" font-size="11">${code}</text>
</svg>`;
}

const certs = [
  { file: 'cert-amazon.svg', issuer: 'Amazon', title: 'Full Stack Development', code: 'AWS-FSD-78491' },
  { file: 'cert-cisco-sec.svg', issuer: 'Cisco', title: 'Cybersecurity', code: 'CSCO-SEC-39120' },
  { file: 'cert-cisco-ds.svg', issuer: 'Cisco', title: 'Data Science', code: 'CSCO-DS-50182' },
  { file: 'cert-cisco-ai.svg', issuer: 'Cisco', title: 'Modern AI', code: 'CSCO-AI-99214' },
  { file: 'cert-ibm.svg', issuer: 'IBM', title: 'Introduction to Cloud', code: 'IBM-CLD-11847' },
  { file: 'cert-dgiskill.svg', issuer: 'DGISkill', title: 'Artificial Intelligence', code: 'DGI-AI-66421' },
  { file: 'cert-hec.svg', issuer: 'HEC', title: 'Algorithm Design', code: 'HEC-ALG-44910' },
];

certs.forEach(c => {
  fs.writeFileSync(path.join(imagesDir, c.file), generateCertSvg(c.issuer, c.title, c.code));
});

console.log('Supporting assets ensured.');
