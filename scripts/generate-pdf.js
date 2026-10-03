const fs = require('fs');
const path = require('path');

// Simple minimal valid PDF 1.4 generator with Helvetica font
function createMinimalPdf() {
  const content = [
    'BT',
    '/F1 20 Tf',
    '50 780 Td',
    '(SIAB AHMAD KHAN) Tj',
    '/F2 10 Tf',
    '0 -18 Td',
    '(Software Engineer | Full-Stack Developer \\(AI / ML\\)) Tj',
    '0 -14 Td',
    '(siabahmad.problos.com | contact@siabahmad.problos.com | github.com/siabahmad) Tj',
    
    // Line separator
    '0 -15 Td',
    '/F1 11 Tf',
    '(PROFESSIONAL SUMMARY) Tj',
    '/F2 9.5 Tf',
    '0 -14 Td',
    '(Software Engineer with expertise in full-stack web application development, AI/ML integrations, and) Tj',
    '0 -12 Td',
    '(software system design. Proven track record building reliable digital products and operational platforms.) Tj',
    
    // Experience
    '0 -20 Td',
    '/F1 11 Tf',
    '(PROFESSIONAL EXPERIENCE) Tj',
    '0 -15 Td',
    '/F1 10 Tf',
    '(Co-Founder  --  Problos) Tj',
    '/F2 9 Tf',
    '300 0 Td',
    '(2026 -- Present) Tj',
    '-300 -13 Td',
    '(- Leading technical direction and software architecture for web platforms and digital systems.) Tj',
    '0 -12 Td',
    '(- Developing high-performance, accessible web applications tailored for real-world client needs.) Tj',
    '0 -12 Td',
    '(- Overseeing end-to-end product delivery from initial architecture to cloud deployment.) Tj',
    
    '0 -18 Td',
    '/F1 10 Tf',
    '(Administrative & Data Systems Coordinator  --  Quaid-e-Azam College) Tj',
    '/F2 9 Tf',
    '300 0 Td',
    '(2024 -- Present) Tj',
    '-300 -13 Td',
    '(- Managing institutional records, student data workflows, and administrative information systems.) Tj',
    '0 -12 Td',
    '(- Automating internal report generation and streamlining inter-departmental communications.) Tj',
    '0 -12 Td',
    '(- Maintaining high data accuracy, system reliability, and secure student record management.) Tj',

    '0 -18 Td',
    '/F1 10 Tf',
    '(Account Manager  --  New Tameer) Tj',
    '/F2 9 Tf',
    '300 0 Td',
    '(2021 -- 2024) Tj',
    '-300 -13 Td',
    '(- Managed client accounts, project coordination, and operational deliverables across active accounts.) Tj',
    '0 -12 Td',
    '(- Collaborated with cross-functional teams to ensure timely completion of commitments.) Tj',

    // Technical Skills
    '0 -22 Td',
    '/F1 11 Tf',
    '(TECHNICAL SKILLS) Tj',
    '/F2 9.5 Tf',
    '0 -14 Td',
    '(Frontend: React, Next.js, JavaScript, TypeScript, HTML, CSS, Tailwind CSS) Tj',
    '0 -13 Td',
    '(Backend: Node.js, Express, Django, REST APIs, FastAPI) Tj',
    '0 -13 Td',
    '(Databases: MongoDB, MySQL, SQLite, PostgreSQL, Redis) Tj',
    '0 -13 Td',
    '(AI / ML: Python, Scikit-learn, NLP, Machine Learning, Data Processing) Tj',
    '0 -13 Td',
    '(Tools: Git, GitHub, VS Code, Vercel, Docker) Tj',

    // Education & Certifications
    '0 -22 Td',
    '/F1 11 Tf',
    '(CERTIFICATIONS) Tj',
    '/F2 9 Tf',
    '0 -14 Td',
    '(- Amazon: Full Stack Development (2024)) Tj',
    '0 -12 Td',
    '(- Cisco: Cybersecurity | Data Science | Modern AI (2023 - 2024)) Tj',
    '0 -12 Td',
    '(- IBM: Introduction to Cloud (2023)) Tj',
    '0 -12 Td',
    '(- DGISkill: Artificial Intelligence (2023)) Tj',
    '0 -12 Td',
    '(- HEC: Algorithm Design (2022)) Tj',
    'ET'
  ].join('\n');

  const streamLength = Buffer.byteLength(content, 'utf8');

  const objects = [
    // 1: Catalog
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
    // 2: Pages
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
    // 3: Page
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n',
    // 4: Contents
    `4 0 obj\n<< /Length ${streamLength} >>\nstream\n${content}\nendstream\nendobj\n`,
    // 5: Font bold
    '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n',
    // 6: Font regular
    '6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n'
  ];

  let header = '%PDF-1.4\n';
  let body = '';
  let xref = [];
  let currentOffset = header.length;

  for (let i = 0; i < objects.length; i++) {
    xref.push(currentOffset);
    body += objects[i];
    currentOffset += Buffer.byteLength(objects[i], 'utf8');
  }

  const startxref = currentOffset;
  let xrefTable = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let offset of xref) {
    xrefTable += String(offset).padStart(10, '0') + ' 00000 n \n';
  }

  const trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${startxref}\n%%EOF\n`;

  const pdfData = header + body + xrefTable + trailer;
  fs.writeFileSync(path.join(__dirname, '..', 'public', 'resume.pdf'), pdfData, 'binary');
  console.log('Valid resume.pdf generated successfully.');
}

createMinimalPdf();
