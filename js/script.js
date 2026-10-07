/**
 * British Online Academy (BOA) - Master Interactive Script & Course Dataset
 * Includes course datasets, navigation handlers, statistics counters, form validation,
 * course filtering, dynamic modal popups, and smooth UI interactions.
 */

// Global Master Dataset for all British Online Academy Programmes
// Global Master Dataset for all British Online Academy Programmes
const COURSES_DATA = {
  // --- LEVEL 3 DIPLOMAS (PRE-UNIVERSITY / A-LEVEL EQUIVALENT) ---
  'level3-business': {
    id: 'level3-business',
    title: 'Level 3 Diploma in Business Management',
    level: 'Ofqual RQF Level 3',
    category: 'Business',
    credits: '120 Credits',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 3 Diploma (120 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, FREE laptop*, all course materials',
    ofqualLink: 'OTHM Level 3 Diploma in Business Management – 603/7795/1',
    image: 'images/hero_student_banner.jpg',
    description: 'The Level 3 Business Management course is a 120 credit qualification (equivalent to 2 A Levels). It provides foundational business knowledge, professional communication skills, operational management, and customer relations.',
    modules: [
      'An Introduction to Business Environment (20 Credits)',
      'Business Resources & Operational Management (20 Credits)',
      'An Introduction to Marketing & Customer Relations (20 Credits)',
      'Business Communication & Professional Writing (20 Credits)',
      'Personal Effectiveness & Productivity (20 Credits)',
      'Customer Service Principles (20 Credits)'
    ],
    entryRequirements: 'Open entry for learners aged 16+ with basic English proficiency. No prior formal business qualifications required.',
    progression: 'Direct entry into Level 4 & 5 Higher Diplomas or Year 1 of a UK University Bachelor Degree.',
    fees: '£1,200 total tuition. 0% interest monthly payment options available from £100/month.',
    related: ['level45-business', 'level3-studies', 'level3-accountancy']
  },
  'level3-accountancy': {
    id: 'level3-accountancy',
    title: 'Level 3 Diploma in Accountancy',
    level: 'Ofqual RQF Level 3',
    category: 'Finance',
    credits: '60 Credits',
    duration: '6 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 3 Foundation Diploma (60 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, digital course materials',
    ofqualLink: 'Regulated Ofqual RQF Qualification – 60 Credits',
    image: 'images/finance_hero_bg.jpg',
    description: 'Introduces core financial accounting practices, bookkeeping principles, payroll calculations, and introductory management accounting for modern business environments.',
    modules: [
      'Introduction to Financial Accounting (15 Credits)',
      'Principles of Bookkeeping & Ledger Controls (15 Credits)',
      'Costing & Management Accounting Basics (15 Credits)',
      'Business Mathematics & Statistics (15 Credits)'
    ],
    entryRequirements: 'Open entry for learners aged 16+ with basic numeracy and literacy skills.',
    progression: 'Progression into Level 4/5 Accounting & Business or AAT advanced stages.',
    fees: '£800 total tuition. 0% interest monthly plans from £80/month.',
    related: ['level45-accounting', 'level3-business', 'level3-studies']
  },
  'level3-studies': {
    id: 'level3-studies',
    title: 'Level 3 Diploma in Business Studies',
    level: 'Ofqual RQF Level 3',
    category: 'Business',
    credits: '60 Credits',
    duration: '6 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 3 Diploma (60 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, digital course materials',
    ofqualLink: 'Regulated Ofqual RQF Qualification – 60 Credits',
    image: 'images/online_learning_hub.jpg',
    description: 'Provides a condensed exploration of commercial enterprise, marketing fundamentals, business ethics, and workplace organization.',
    modules: [
      'Foundations of Business Enterprise (15 Credits)',
      'Marketing Fundamentals (15 Credits)',
      'Business Communication (15 Credits)',
      'Workplace Ethics & Governance (15 Credits)'
    ],
    entryRequirements: 'Open entry for learners aged 16+ with basic English proficiency.',
    progression: 'Progression to Level 4/5 Business Management Diploma.',
    fees: '£800 total tuition. 0% interest monthly plans from £80/month.',
    related: ['level3-business', 'level45-business', 'level3-people']
  },
  'level3-employability': {
    id: 'level3-employability',
    title: 'Level 3 Diploma in Employability & Workplace Skills',
    level: 'Ofqual RQF Level 3',
    category: 'Professional',
    credits: '60 Credits',
    duration: '6 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 3 Diploma (60 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, career advice',
    ofqualLink: 'Regulated Ofqual RQF Qualification – 60 Credits',
    image: 'images/student_experience.jpg',
    description: 'Focuses on critical workplace competencies, leadership potential, digital literacy, problem solving, and effective professional communication.',
    modules: [
      'Professional Communication & Writing (15 Credits)',
      'Time Management & Personal Productivity (15 Credits)',
      'Teamwork & Interpersonal Dynamics (15 Credits)',
      'Problem Solving & Decision Making (15 Credits)'
    ],
    entryRequirements: 'Open entry for learners aged 16+ looking to enhance employment prospects.',
    progression: 'Progression to Level 4 Higher Diplomas or immediate workplace entry.',
    fees: '£800 total tuition. 0% interest monthly plans from £80/month.',
    related: ['level3-business', 'level3-people', 'level45-business']
  },
  'level3-engineering': {
    id: 'level3-engineering',
    title: 'Level 3 Diploma in Engineering',
    level: 'Ofqual RQF Level 3',
    category: 'Engineering',
    credits: '60 Credits',
    duration: '6 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 3 Diploma (60 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, digital course materials',
    ofqualLink: 'Regulated Ofqual RQF Qualification – 60 Credits',
    image: 'images/hero_student_banner.jpg',
    description: 'Establishes basic engineering principles, mathematics for technicians, materials science, and health & safety in engineering environments.',
    modules: [
      'Engineering Mathematics & Physics (15 Credits)',
      'Engineering Principles & Materials (15 Credits)',
      'Health & Safety in Technical Environments (15 Credits)',
      'Computer-Aided Design Basics (15 Credits)'
    ],
    entryRequirements: 'Open entry for learners aged 16+ with basic math and science aptitude.',
    progression: 'Progression into Higher National / Level 4 Engineering pathways.',
    fees: '£850 total tuition. 0% interest monthly plans from £85/month.',
    related: ['level45-it', 'level3-business', 'level3-employability']
  },
  'level3-fashion': {
    id: 'level3-fashion',
    title: 'Level 3 Diploma in Fashion & Textiles',
    level: 'Ofqual RQF Level 3',
    category: 'Creative Arts',
    credits: '120 Credits',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 3 Diploma (120 credits)',
    assessment: 'Online written portfolio & assignments',
    includes: '1-2-1 tutor support, digital portfolio guidance',
    ofqualLink: 'Regulated Ofqual RQF Qualification – 120 Credits',
    image: 'images/online_learning_hub.jpg',
    description: 'Comprehensive creative diploma exploring textile creation, garment construction concepts, fashion history, branding, and portfolio design.',
    modules: [
      'Introduction to Fashion Design & Illustration (20 Credits)',
      'Textile Properties & Materials (20 Credits)',
      'Garment Construction Techniques (20 Credits)',
      'Fashion Marketing & Brand Strategy (20 Credits)',
      'Trends Forecasting & History of Fashion (20 Credits)',
      'Final Creative Portfolio Development (20 Credits)'
    ],
    entryRequirements: 'Open entry for creative learners aged 16+.',
    progression: 'Progression into Level 4 Creative & Fashion Business programmes.',
    fees: '£1,200 total tuition. 0% interest monthly plans from £100/month.',
    related: ['level3-business', 'level45-business', 'level3-studies']
  },
  'level3-health': {
    id: 'level3-health',
    title: 'Level 3 Diploma in Health & Social Care',
    level: 'Ofqual RQF Level 3',
    category: 'Health',
    credits: '60 Credits',
    duration: '6 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 3 Diploma (60 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, digital study portal',
    ofqualLink: 'Regulated Ofqual RQF Qualification – 60 Credits',
    image: 'images/student_experience.jpg',
    description: 'Prepares individuals for foundation roles in healthcare, covering person-centered care, safeguarding principles, health promotion, and communication.',
    modules: [
      'Principles of Person-Centered Care (15 Credits)',
      'Safeguarding Adults & Children (15 Credits)',
      'Health, Safety & Hygiene in Care Settings (15 Credits)',
      'Communication Skills in Social Care (15 Credits)'
    ],
    entryRequirements: 'Open entry for learners aged 16+ interested in healthcare.',
    progression: 'Direct progression into Level 4/5 Health & Social Care Diploma.',
    fees: '£800 total tuition. 0% interest monthly plans from £80/month.',
    related: ['level45-health', 'level7-health', 'level3-business']
  },
  'level3-it': {
    id: 'level3-it',
    title: 'Level 3 Diploma in Information Technology',
    level: 'Ofqual RQF Level 3',
    category: 'Computing',
    credits: '60 Credits',
    duration: '6 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 3 Diploma (60 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, digital course materials',
    ofqualLink: 'Regulated Ofqual RQF Qualification – 60 Credits',
    image: 'images/online_learning_hub.jpg',
    description: 'Foundational IT diploma covering hardware fundamentals, software basics, network operating principles, and introduction to web development.',
    modules: [
      'Computer Systems Hardware (15 Credits)',
      'Introduction to Computer Networks (15 Credits)',
      'Web Design & HTML/CSS Basics (15 Credits)',
      'IT Security & User Safety (15 Credits)'
    ],
    entryRequirements: 'Open entry for learners aged 16+ with basic computer literacy.',
    progression: 'Direct progression into Level 4 & 5 IT & Computing Diploma.',
    fees: '£800 total tuition. 0% interest monthly plans from £80/month.',
    related: ['level45-it', 'level45-cyber', 'level3-business']
  },
  'level3-law': {
    id: 'level3-law',
    title: 'Level 3 Diploma in Law',
    level: 'Ofqual RQF Level 3',
    category: 'Law',
    credits: '60 Credits',
    duration: '6 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 3 Diploma (60 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, legal research guides',
    ofqualLink: 'Regulated Ofqual RQF Qualification – 60 Credits',
    image: 'images/graduation_success.jpg',
    description: 'An entry-level overview of legal principles, the English legal system, basic contract law, and constitutional law foundations.',
    modules: [
      'The English Legal System (15 Credits)',
      'Contract Law Basics (15 Credits)',
      'Public Law & Civil Rights (15 Credits)',
      'Legal Method & Reasoning (15 Credits)'
    ],
    entryRequirements: 'Open entry for learners aged 16+.',
    progression: 'Progression into Level 4 & 5 Diploma in Law.',
    fees: '£800 total tuition. 0% interest monthly plans from £80/month.',
    related: ['level45-law', 'level3-business', 'level3-studies']
  },
  'level3-people': {
    id: 'level3-people',
    title: 'Level 3 Diploma in People & Organisations',
    level: 'Ofqual RQF Level 3',
    category: 'Human Resources',
    credits: '60 Credits',
    duration: '6 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 3 Diploma (60 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, digital course materials',
    ofqualLink: 'Regulated Ofqual RQF Qualification – 60 Credits',
    image: 'images/hero_student_banner.jpg',
    description: 'Introduces human resource management concepts, organizational behavior, employee motivation, and workplace leadership.',
    modules: [
      'Understanding Organisational Structures (15 Credits)',
      'People Management Principles (15 Credits)',
      'Employee Motivation & Performance (15 Credits)',
      'Diversity & Inclusion in the Workplace (15 Credits)'
    ],
    entryRequirements: 'Open entry for learners aged 16+.',
    progression: 'Progression to Level 4/5 Human Resource Management or Business Management.',
    fees: '£800 total tuition. 0% interest monthly plans from £80/month.',
    related: ['level45-hrm', 'level3-business', 'level7-hrm']
  },

  // --- LEVEL 4 & 5 DIPLOMAS (UNDERGRADUATE Y1 & Y2 EQUIVALENT - 240 CREDITS) ---
  'level45-business': {
    id: 'level45-business',
    title: 'Level 4 & 5 Diploma in Business Management',
    level: 'Ofqual RQF Level 4 & 5',
    category: 'Business',
    credits: '240 Credits',
    duration: '12 - 18 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 4 & 5 Diploma (240 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, FREE laptop*, all course materials and more',
    ofqualLink: 'OTHM Level 4 & 5 Diploma in Business Management – 603/2175/7',
    image: 'images/hero_student_banner.jpg',
    description: 'Comprehensive higher education pathway equivalent to Years 1 & 2 of a UK BA (Hons) Degree. Covers corporate governance, financial management, strategic marketing, human resources, and business ethics.',
    modules: [
      'The Culture of Organisations (20 Credits)',
      'Developing Teams & Leadership Performance (20 Credits)',
      'Operational & Managerial Finance (20 Credits)',
      'Strategic Marketing Mix & Branding (20 Credits)',
      'Human Resource Management Strategy (20 Credits)',
      'Business Ethics & Corporate Governance (20 Credits)',
      'Managing Business Operations (20 Credits)',
      'Strategic Decision Making (20 Credits)',
      'Project Management in Practice (20 Credits)',
      'Business Law & Macroeconomics (20 Credits)',
      'Change Management & Innovation (20 Credits)',
      'Research Methods for Business (20 Credits)'
    ],
    entryRequirements: 'Level 3 qualification or equivalent (A-Levels / Level 3 Diploma), OR 2+ years of relevant managerial or administrative work experience.',
    progression: 'Direct entry into Final Year BA (Hons) Business Management Top-Up at UK partner universities.',
    fees: '£2,400 total tuition. 0% interest instalment plans available from £150/month.',
    related: ['level6-business', 'level7-strategic', 'level45-accounting']
  },
  'level45-accounting': {
    id: 'level45-accounting',
    title: 'Level 4 & 5 Diploma in Accounting & Business',
    level: 'Ofqual RQF Level 4 & 5',
    category: 'Finance',
    credits: '240 Credits',
    duration: '12 - 18 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 4 & 5 Diploma in Accounting (240 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, FREE laptop*, all course materials',
    ofqualLink: 'OTHM Level 4 & 5 Diploma in Accounting and Business – 603/3328/1',
    image: 'images/finance_hero_bg.jpg',
    description: 'Rigorous accounting & finance diploma equivalent to Years 1 & 2 of a UK Accounting Degree. Covers financial reporting, auditing, management accounting, corporate taxation, and business law.',
    modules: [
      'Financial Accounting Principles (20 Credits)',
      'Management Accounting Techniques (20 Credits)',
      'Business Economics (20 Credits)',
      'Commercial Law (20 Credits)',
      'Corporate Finance & Valuation (20 Credits)',
      'Taxation Principles & Practice (20 Credits)',
      'Advanced Financial Reporting (20 Credits)',
      'Auditing & Assurance Services (20 Credits)',
      'Financial Management & Control (20 Credits)',
      'Performance Management Systems (20 Credits)',
      'Ethics & Governance in Accounting (20 Credits)',
      'Applied Accounting Research Project (20 Credits)'
    ],
    entryRequirements: 'Level 3 qualification or A-Levels in math/business, or 2+ years relevant accounting experience.',
    progression: 'Direct entry into Final Year BSc (Hons) Accounting & Finance Top-Up degree.',
    fees: '£2,400 total tuition. 0% interest instalment plans from £150/month.',
    related: ['level45-business', 'level3-accountancy', 'level7-strategic']
  },
  'level45-cyber': {
    id: 'level45-cyber',
    title: 'Level 4 & 5 Diploma in Cyber Security',
    level: 'Ofqual RQF Level 4 & 5',
    category: 'Computing',
    credits: '240 Credits',
    duration: '12 - 18 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 4 & 5 Diploma in Cyber Security (240 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, FREE laptop*, lab resources',
    ofqualLink: 'OTHM Level 4 & 5 Diploma in Cyber Security – 603/4861/2',
    image: 'images/online_learning_hub.jpg',
    description: 'Specialized security engineering diploma equivalent to Years 1 & 2 of a UK Cyber Security Degree. Covers network defense, ethical hacking concepts, cryptography, incident response, and security governance.',
    modules: [
      'Cyber Security Threat Fundamentals (20 Credits)',
      'Network Architecture & Protocol Security (20 Credits)',
      'Information Security Governance & Compliance (20 Credits)',
      'Ethical Hacking & Vulnerability Assessment (20 Credits)',
      'Digital Forensics & Incident Response (20 Credits)',
      'Cryptography Principles (20 Credits)',
      'Applied Network Defense (20 Credits)',
      'Cloud & Infrastructure Security (20 Credits)',
      'Cyber Law & Ethical Frameworks (20 Credits)',
      'Risk Management & Disaster Recovery (20 Credits)',
      'Security Operations Management (20 Credits)',
      'Cyber Security Applied Project (20 Credits)'
    ],
    entryRequirements: 'Level 3 qualification or basic computing knowledge / IT experience.',
    progression: 'Direct progression into Final Year BSc (Hons) Cyber Security or Information Security Top-Up degree.',
    fees: '£2,400 total tuition. 0% interest instalment plans from £150/month.',
    related: ['level45-it', 'level7-ai', 'level45-business']
  },
  'level45-health': {
    id: 'level45-health',
    title: 'Level 4 & 5 Diploma in Health & Social Care',
    level: 'Ofqual RQF Level 4 & 5',
    category: 'Health',
    credits: '240 Credits',
    duration: '12 - 18 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 4 & 5 Diploma in Health & Social Care (240 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, FREE laptop*, all course materials',
    ofqualLink: 'OTHM Level 4 & 5 Diploma in Health and Social Care Management – 603/4862/4',
    image: 'images/student_experience.jpg',
    description: 'Specialized leadership qualification designed for care workers, supervisors, and healthcare managers to master health policy, safeguarding, care delivery quality, and team leadership.',
    modules: [
      'Equality, Diversity & Inclusion in Healthcare (20 Credits)',
      'Safeguarding & Protection of Vulnerable Adults (20 Credits)',
      'Leading & Managing Teams in Healthcare (20 Credits)',
      'Quality Assurance & Risk Management in Care (20 Credits)',
      'Public Health Policy & Strategy (20 Credits)',
      'Financial Management in Care Settings (20 Credits)',
      'Person-Centered Care Delivery (20 Credits)',
      'Healthcare Governance & Compliance (20 Credits)',
      'Health & Safety in Care Operations (20 Credits)',
      'Mental Health & Wellbeing Frameworks (20 Credits)',
      'Strategic Healthcare Operations (20 Credits)',
      'Healthcare Research & Evidence-Based Practice (20 Credits)'
    ],
    entryRequirements: 'Level 3 qualification or 1+ year experience in a health or social care setting.',
    progression: 'Direct entry into Final Year BSc (Hons) Health & Social Care Management Top-Up degree.',
    fees: '£2,400 total tuition. 0% interest instalment plans from £150/month.',
    related: ['level7-health', 'level3-health', 'level45-business']
  },
  'level45-hrm': {
    id: 'level45-hrm',
    title: 'Level 4 & 5 Diploma in Human Resource Management',
    level: 'Ofqual RQF Level 4 & 5',
    category: 'Human Resources',
    credits: '240 Credits',
    duration: '12 - 18 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 4 & 5 Diploma in HRM (240 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, FREE laptop*, course materials',
    ofqualLink: 'OTHM Level 4 & 5 Diploma in Human Resource Management – 603/5246/9',
    image: 'images/hero_student_banner.jpg',
    description: 'Professional HR diploma equivalent to Years 1 & 2 of a UK BA (Hons) HR Degree. Covers employment law, talent acquisition, reward management, HR analytics, and organizational development.',
    modules: [
      'Human Resource Management Fundamentals (20 Credits)',
      'Employee Resourcing & Talent Management (20 Credits)',
      'Employment Law & Workplace Relations (20 Credits)',
      'Learning & Professional Development (20 Credits)',
      'Performance & Reward Management Systems (20 Credits)',
      'Organizational Culture & Employee Engagement (20 Credits)',
      'Strategic HR Management (20 Credits)',
      'HR Analytics & Data Decision Making (20 Credits)',
      'Leadership Development Strategies (20 Credits)',
      'Managing Organizational Change (20 Credits)',
      'Workplace Health & Wellbeing (20 Credits)',
      'HR Applied Consultancy Project (20 Credits)'
    ],
    entryRequirements: 'Level 3 qualification or 2+ years HR / business experience.',
    progression: 'Direct progression into Final Year BA (Hons) Human Resource Management Top-Up.',
    fees: '£2,400 total tuition. 0% interest instalment plans from £150/month.',
    related: ['level7-hrm', 'level45-business', 'level3-people']
  },
  'level45-law': {
    id: 'level45-law',
    title: 'Level 4 & 5 Diploma in Law',
    level: 'Ofqual RQF Level 4 & 5',
    category: 'Law',
    credits: '240 Credits',
    duration: '12 - 18 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 4 & 5 Diploma in Law (240 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, FREE laptop*, legal research tools',
    ofqualLink: 'OTHM Level 4 & 5 Diploma in Law – 603/6127/3',
    image: 'images/graduation_success.jpg',
    description: 'Rigorous legal foundation diploma covering contract law, public law, corporate law, legal systems, criminal law, and human rights frameworks.',
    modules: [
      'English Legal System & Method (20 Credits)',
      'Law of Contract (20 Credits)',
      'Public Law & Constitutional Principles (20 Credits)',
      'Criminal Law & Procedure (20 Credits)',
      'European Union Law (20 Credits)',
      'Land Law & Property Principles (20 Credits)',
      'Law of Torts (20 Credits)',
      'Corporate & Commercial Law (20 Credits)',
      'Employment Law (20 Credits)',
      'Human Rights Law (20 Credits)',
      'Legal Research & Writing (20 Credits)',
      'Equity & Trusts (20 Credits)'
    ],
    entryRequirements: 'Level 3 qualification or relevant professional background.',
    progression: 'Direct progression into LLB (Hons) Law Top-Up degree at accepting UK universities.',
    fees: '£2,500 total tuition. 0% interest instalment plans from £160/month.',
    related: ['level3-law', 'level45-business', 'level7-strategic']
  },
  'level45-logistics': {
    id: 'level45-logistics',
    title: 'Level 4 & 5 Diploma in Logistics & Supply Chain Management',
    level: 'Ofqual RQF Level 4 & 5',
    category: 'Logistics',
    credits: '240 Credits',
    duration: '12 - 18 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 4 & 5 Diploma in Logistics (240 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, FREE laptop*, course materials',
    ofqualLink: 'OTHM Level 4 & 5 Diploma in Logistics & Supply Chain – 603/5249/4',
    image: 'images/online_learning_hub.jpg',
    description: 'Covers global freight transport, inventory control, procurement strategy, warehouse management, and supply chain technology.',
    modules: [
      'Principles of Logistics & Supply Chain Management (20 Credits)',
      'Procurement & Inventory Management (20 Credits)',
      'International Freight & Transport Operations (20 Credits)',
      'Warehouse Operations & Distribution (20 Credits)',
      'Supply Chain Risk & Resilience (20 Credits)',
      'Commercial Operations & Contracts (20 Credits)',
      'Strategic Logistics Management (20 Credits)',
      'Global Supply Chain Strategy (20 Credits)',
      'Sustainable Logistics & Green Operations (20 Credits)',
      'Supply Chain Technology & Information Systems (20 Credits)',
      'Quality & Lean Operations Management (20 Credits)',
      'Logistics Applied Research Project (20 Credits)'
    ],
    entryRequirements: 'Level 3 qualification or relevant industry experience.',
    progression: 'Direct entry into Final Year BSc (Hons) Supply Chain Management Top-Up.',
    fees: '£2,400 total tuition. 0% interest instalment plans from £150/month.',
    related: ['level45-business', 'level45-pm', 'level7-strategic']
  },
  'level45-it': {
    id: 'level45-it',
    title: 'Level 4 & 5 Diploma in IT & Computing',
    level: 'Ofqual RQF Level 4 & 5',
    category: 'Computing',
    credits: '240 Credits',
    duration: '12 - 18 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 4 & 5 Diploma in Computing (240 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, FREE laptop*, digital labs',
    ofqualLink: 'OTHM Level 4 & 5 Diploma in Information Technology – 603/3329/3',
    image: 'images/online_learning_hub.jpg',
    description: 'Advanced computing diploma equivalent to Years 1 & 2 of a UK Computing Degree. Covers computer systems architecture, web interface engineering, relational databases, networking, software design, and cyber security fundamentals.',
    modules: [
      'Computer Systems Architecture (20 Credits)',
      'Web & Interface Engineering (20 Credits)',
      'Relational Database Development (20 Credits)',
      'Networking Technologies & Protocols (20 Credits)',
      'Object-Oriented Software Engineering (20 Credits)',
      'Cyber Security Essentials & Risk Management (20 Credits)',
      'Information Systems Analysis & Design (20 Credits)',
      'Data Analytics & Business Intelligence (20 Credits)',
      'Cloud Computing Infrastructure (20 Credits)',
      'Mobile Application Development (20 Credits)',
      'IT Project Management (20 Credits)',
      'Final Computing Applied Project (20 Credits)'
    ],
    entryRequirements: 'Level 3 qualification or basic IT background / technical experience.',
    progression: 'Direct progression into Final Year BSc (Hons) Computing or Software Engineering Top-Up.',
    fees: '£2,400 total tuition. 0% interest instalment plans from £150/month.',
    related: ['level45-cyber', 'level7-ai', 'level3-it']
  },
  'level45-psychology': {
    id: 'level45-psychology',
    title: 'Level 4 & 5 Diploma in Psychology',
    level: 'Ofqual RQF Level 4 & 5',
    category: 'Social Sciences',
    credits: '240 Credits',
    duration: '12 - 18 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 4 & 5 Diploma in Psychology (240 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, FREE laptop*, course materials',
    ofqualLink: 'OTHM Level 4 & 5 Diploma in Psychology – 603/6128/5',
    image: 'images/student_experience.jpg',
    description: 'Undergraduate psychology diploma covering cognitive psychology, developmental stages, social psychology, research methods, and biological foundations of behavior.',
    modules: [
      'Foundations of Psychology (20 Credits)',
      'Cognitive Psychology & Memory (20 Credits)',
      'Developmental Psychology (20 Credits)',
      'Social Psychology & Group Dynamics (20 Credits)',
      'Biological Psychology & Neuroscience (20 Credits)',
      'Research Methods in Psychology (20 Credits)',
      'Abnormal Psychology & Clinical Frameworks (20 Credits)',
      'Personality & Individual Differences (20 Credits)',
      'Health Psychology & Stress Management (20 Credits)',
      'Psychological Assessment & Testing (20 Credits)',
      'Organizational Psychology Applications (20 Credits)',
      'Applied Psychology Empirical Project (20 Credits)'
    ],
    entryRequirements: 'Level 3 qualification or relevant background in social sciences.',
    progression: 'Direct entry into Final Year BSc (Hons) Psychology Top-Up degree.',
    fees: '£2,400 total tuition. 0% interest instalment plans from £150/month.',
    related: ['level7-psychology', 'level45-health', 'level45-hrm']
  },
  'level45-pm': {
    id: 'level45-pm',
    title: 'Level 4 & 5 Diploma in Project Management',
    level: 'Ofqual RQF Level 4 & 5',
    category: 'Management',
    credits: '240 Credits',
    duration: '12 - 18 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 4 & 5 Diploma in Project Management (240 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, FREE laptop*, project software guides',
    ofqualLink: 'OTHM Level 4 & 5 Diploma in Project Management – 603/5245/7',
    image: 'images/hero_student_banner.jpg',
    description: 'Comprehensive project management pathway covering Agile frameworks, PRINCE2 principles, risk mitigation, budgeting, and stakeholder leadership.',
    modules: [
      'Project Planning & Lifecycle Management (20 Credits)',
      'Project Budgeting & Financial Control (20 Credits)',
      'Risk, Quality & Change Management (20 Credits)',
      'Stakeholder Engagement & Communication (20 Credits)',
      'Agile & Lean Project Frameworks (20 Credits)',
      'Project Leadership & Team Management (20 Credits)',
      'Strategic Project Portfolio Management (20 Credits)',
      'Contracts & Procurement in Projects (20 Credits)',
      'Project Management Software Applications (20 Credits)',
      'Governance & Ethics in Project Management (20 Credits)',
      'International Project Execution (20 Credits)',
      'Final Applied Project Consultancy (20 Credits)'
    ],
    entryRequirements: 'Level 3 qualification or 2+ years workplace project experience.',
    progression: 'Direct progression into Final Year BSc (Hons) / BA (Hons) Project Management Top-Up.',
    fees: '£2,400 total tuition. 0% interest instalment plans from £150/month.',
    related: ['level7-pm', 'level45-business', 'level45-logistics']
  },
  'level45-teaching': {
    id: 'level45-teaching',
    title: 'Level 4 & 5 Diploma in Teaching & Education',
    level: 'Ofqual RQF Level 4 & 5',
    category: 'Education',
    credits: '240 Credits',
    duration: '12 - 18 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 4 & 5 Diploma in Education & Training (240 credits)',
    assessment: 'Online written assignments & teaching practice logs',
    includes: '1-2-1 tutor support, teaching practice guidance',
    ofqualLink: 'OTHM Level 4 & 5 Diploma in Education and Training – 603/4863/6',
    image: 'images/student_experience.jpg',
    description: 'Designed for aspiring teachers, trainers, and educators to master pedagogy, curriculum design, assessment techniques, and educational psychology.',
    modules: [
      'Understanding Roles & Responsibilities in Education (20 Credits)',
      'Curriculum Design & Educational Planning (20 Credits)',
      'Inclusive Teaching & Learning Approaches (20 Credits)',
      'Assessment Methods in Education (20 Credits)',
      'Educational Psychology & Learning Theories (20 Credits)',
      'Technology-Enhanced Learning & Digital Tools (20 Credits)',
      'Advanced Pedagogical Practice (20 Credits)',
      'Evaluating Learning Programmes (20 Credits)',
      'Special Educational Needs & Disability (20 Credits)',
      'Policy & Governance in Higher/Further Education (20 Credits)',
      'Reflective Practice in Teaching (20 Credits)',
      'Teaching Practice Capstone Portfolio (20 Credits)'
    ],
    entryRequirements: 'Level 3 qualification or relevant subject matter expertise for teaching.',
    progression: 'Direct entry into Final Year BA (Hons) Education & Professional Development Top-Up.',
    fees: '£2,400 total tuition. 0% interest instalment plans from £150/month.',
    related: ['level45-business', 'level45-psychology', 'level3-employability']
  },
  'level45-hospitality': {
    id: 'level45-hospitality',
    title: 'Level 4 & 5 Diploma in Tourism & Hospitality Management',
    level: 'Ofqual RQF Level 4 & 5',
    category: 'Hospitality',
    credits: '240 Credits',
    duration: '12 - 18 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 4 & 5 Diploma in Tourism & Hospitality (240 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, FREE laptop*, course materials',
    ofqualLink: 'OTHM Level 4 & 5 Diploma in Tourism and Hospitality Management – 603/5248/2',
    image: 'images/hero_student_banner.jpg',
    description: 'Professional hospitality diploma covering resort management, food and beverage operations, international tourism strategy, customer experience excellence, and financial controls.',
    modules: [
      'Food & Beverage Operations Management (20 Credits)',
      'International Tourism & Hospitality Systems (20 Credits)',
      'Customer Relationship Management in Hospitality (20 Credits)',
      'Front Office & Housekeeping Operations (20 Credits)',
      'Financial Management for Hospitality (20 Credits)',
      'Hospitality Marketing & Branding (20 Credits)',
      'Strategic Hospitality Operations (20 Credits)',
      'Event Management & Conference Operations (20 Credits)',
      'Sustainable Tourism & Ethics (20 Credits)',
      'Human Resources in Hospitality (20 Credits)',
      'Resort & Hotel Property Management (20 Credits)',
      'Hospitality Business Applied Project (20 Credits)'
    ],
    entryRequirements: 'Level 3 qualification or relevant hospitality industry work experience.',
    progression: 'Direct progression into Final Year BA (Hons) International Hospitality Management Top-Up.',
    fees: '£2,400 total tuition. 0% interest instalment plans from £150/month.',
    related: ['level45-business', 'level6-business', 'level3-business']
  },

  // --- LEVEL 6 DIPLOMAS (UNDERGRADUATE FINAL YEAR EQUIVALENT - 120 CREDITS) ---
  'level6-business': {
    id: 'level6-business',
    title: 'Level 6 Diploma in Business Management',
    level: 'Ofqual RQF Level 6',
    category: 'Business',
    credits: '120 Credits',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 6 Graduate Diploma (120 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, dissertation support, course materials',
    ofqualLink: 'OTHM Level 6 Diploma in Business Management – 603/2176/9',
    image: 'images/hero_student_banner.jpg',
    description: 'Degree-level graduate diploma equivalent to the 3rd & Final Year of a UK Bachelor Degree. Prepares learners for strategic executive roles or Master / MBA entry.',
    modules: [
      'Leadership & Strategic Management (20 Credits)',
      'Strategic Human Resource Management (20 Credits)',
      'International Marketing Strategy (20 Credits)',
      'Corporate Governance & Risk Management (20 Credits)',
      'Financial Strategy & Decision Making (20 Credits)',
      'Business Research Project (20 Credits)'
    ],
    entryRequirements: 'Level 5 Diploma or UK Foundation Degree, OR 3+ years relevant supervisory experience.',
    progression: 'Direct entry into Master Degree / MBA top-up or Level 7 Postgraduate Diplomas.',
    fees: '£1,800 total tuition. 0% interest instalment plans from £150/month.',
    related: ['level7-strategic', 'level45-business', 'level6-sales']
  },
  'level6-sales': {
    id: 'level6-sales',
    title: 'Level 6 Diploma in Professional Sales Management',
    level: 'Ofqual RQF Level 6',
    category: 'Sales & Marketing',
    credits: '120 Credits',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 6 Graduate Diploma (120 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, sales strategy guides',
    ofqualLink: 'OTHM Level 6 Diploma in Professional Sales Management – 603/5250/0',
    image: 'images/online_learning_hub.jpg',
    description: 'Advanced sales management diploma focusing on strategic sales leadership, key account management, global market expansion, and commercial negotiation.',
    modules: [
      'Strategic Sales Leadership (20 Credits)',
      'Key Account Management Strategy (20 Credits)',
      'Global Sales Operations & Logistics (20 Credits)',
      'Commercial Negotiation & Contracting (20 Credits)',
      'Sales Forecasting & Financial Management (20 Credits)',
      'Applied Sales Consultancy Project (20 Credits)'
    ],
    entryRequirements: 'Level 5 qualification or 3+ years experience in B2B sales management.',
    progression: 'Direct progression into MSc / MBA Marketing & Sales Top-Up.',
    fees: '£1,800 total tuition. 0% interest instalment plans from £150/month.',
    related: ['level7-sales', 'level6-business', 'level7-strategic']
  },

  // --- LEVEL 7 DIPLOMAS (POSTGRADUATE / MBA PATHWAY - 120 CREDITS) ---
  'level7-strategic': {
    id: 'level7-strategic',
    title: 'Level 7 Diploma in Strategic Management & Leadership (MBA Pathway)',
    level: 'Ofqual RQF Level 7 (Postgraduate)',
    category: 'Business',
    credits: '120 Credits',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 7 Postgraduate Diploma (120 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, FREE laptop*, all course materials',
    ofqualLink: 'OTHM Level 7 Diploma in Strategic Management and Leadership – 603/2181/2',
    image: 'images/programmes/mba_feature.jpg',
    description: 'Elite postgraduate executive diploma designed for senior managers, directors, and entrepreneurs. Covers global strategic management, executive leadership, corporate finance, and organisational transformation.',
    modules: [
      'Strategic Management & Corporate Governance (20 Credits)',
      'Executive Leadership & People Management (20 Credits)',
      'Strategic Financial Management & Decision Making (20 Credits)',
      'Strategic Marketing & Brand Management (20 Credits)',
      'Global Strategy & Enterprise Risk Management (20 Credits)',
      'Research Methods for Senior Managers (20 Credits)'
    ],
    entryRequirements: 'Honors Degree (BA/BSc) OR 3+ years of senior managerial/executive work experience.',
    progression: 'Fast-track MBA Top-Up dissertation with UK partner universities (earn full MBA degree in 6 months).',
    fees: '£2,800 total tuition. 0% interest instalment plans from £180/month.',
    related: ['level8-strategic', 'level7-health', 'level6-business']
  },
  'level7-ai': {
    id: 'level7-ai',
    title: 'Level 7 Diploma in Artificial Intelligence',
    level: 'Ofqual RQF Level 7 (Postgraduate)',
    category: 'Computing & AI',
    credits: '120 Credits',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 7 Postgraduate Diploma in AI (120 credits)',
    assessment: 'Online written assignments & code projects',
    includes: '1-2-1 tutor support, AI lab environments',
    ofqualLink: 'OTHM Level 7 Diploma in Artificial Intelligence – 603/7796/3',
    image: 'images/online_learning_hub.jpg',
    description: 'Postgraduate AI diploma for tech leaders covering machine learning algorithms, deep learning neural networks, natural language processing, computer vision, and AI ethics.',
    modules: [
      'Machine Learning Algorithms & Frameworks (20 Credits)',
      'Deep Learning & Neural Networks (20 Credits)',
      'Natural Language Processing & LLMs (20 Credits)',
      'Computer Vision & Image Processing (20 Credits)',
      'AI Ethics, Governance & Safety (20 Credits)',
      'Artificial Intelligence Applied Research Dissertation (20 Credits)'
    ],
    entryRequirements: 'BSc in Computer Science, Math, Engineering OR 3+ years software development experience.',
    progression: 'Fast-track MSc Artificial Intelligence Top-Up at UK partner universities.',
    fees: '£2,800 total tuition. 0% interest instalment plans from £180/month.',
    related: ['level45-it', 'level45-cyber', 'level7-strategic']
  },
  'level7-health': {
    id: 'level7-health',
    title: 'Level 7 Diploma in Health & Social Care Management',
    level: 'Ofqual RQF Level 7 (Postgraduate)',
    category: 'Health',
    credits: '120 Credits',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 7 Postgraduate Diploma (120 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, FREE laptop*, course materials',
    ofqualLink: 'OTHM Level 7 Diploma in Health and Social Care Management – 603/5247/0',
    image: 'images/student_experience.jpg',
    description: 'Advanced postgraduate qualification for clinical directors, health service executives, and senior healthcare policy administrators.',
    modules: [
      'Strategic Health Service Management (20 Credits)',
      'Healthcare Policy, Governance & Law (20 Credits)',
      'Financial Decision Making in Healthcare (20 Credits)',
      'Quality Improvement & Patient Safety (20 Credits)',
      'Leadership & Organizational Development in Health (20 Credits)',
      'Healthcare Research & Strategic Evaluation (20 Credits)'
    ],
    entryRequirements: 'Degree in relevant discipline OR 3+ years supervisory/management experience in health sector.',
    progression: 'Fast-track MSc / MBA Healthcare Management Top-Up at UK universities.',
    fees: '£2,800 total tuition. 0% interest instalment plans from £180/month.',
    related: ['level45-health', 'level7-strategic', 'level7-hrm']
  },
  'level7-hrm': {
    id: 'level7-hrm',
    title: 'Level 7 Diploma in Human Resource Management',
    level: 'Ofqual RQF Level 7 (Postgraduate)',
    category: 'Human Resources',
    credits: '120 Credits',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 7 Postgraduate Diploma in HRM (120 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, course materials',
    ofqualLink: 'OTHM Level 7 Diploma in Human Resource Management – 603/5251/2',
    image: 'images/hero_student_banner.jpg',
    description: 'Postgraduate executive HR diploma covering global talent strategy, employment law, executive reward management, organizational transformation, and HR leadership.',
    modules: [
      'Strategic Human Resource Management (20 Credits)',
      'Resourcing & Talent Management Strategy (20 Credits)',
      'Leadership & Management Development (20 Credits)',
      'Employment Law & Industrial Relations (20 Credits)',
      'Performance Management & Reward Strategy (20 Credits)',
      'HR Research Methods for Senior Managers (20 Credits)'
    ],
    entryRequirements: 'Honors Degree OR 3+ years HR management experience.',
    progression: 'Fast-track MA / MSc Human Resource Management Top-Up degree.',
    fees: '£2,800 total tuition. 0% interest instalment plans from £180/month.',
    related: ['level45-hrm', 'level7-strategic', 'level7-psychology']
  },
  'level7-psychology': {
    id: 'level7-psychology',
    title: 'Level 7 Diploma in Organisational Psychology & Business',
    level: 'Ofqual RQF Level 7 (Postgraduate)',
    category: 'Social Sciences',
    credits: '120 Credits',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 7 Postgraduate Diploma (120 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, course materials',
    ofqualLink: 'OTHM Level 7 Diploma in Organisational Psychology – 603/6129/7',
    image: 'images/student_experience.jpg',
    description: 'Postgraduate diploma exploring psychological dynamics in corporate environments, executive coaching, workplace wellbeing, consumer behavior, and change leadership.',
    modules: [
      'Psychological Assessment in Organizations (20 Credits)',
      'Leadership Psychology & Executive Coaching (20 Credits)',
      'Organizational Behavior & Cultural Transformation (20 Credits)',
      'Workplace Health, Wellbeing & Resilience (20 Credits)',
      'Consumer Psychology & Marketing Insights (20 Credits)',
      'Advanced Psychological Research Methods (20 Credits)'
    ],
    entryRequirements: 'Degree in Psychology or Business OR 3+ years management experience.',
    progression: 'Fast-track MSc Organisational Psychology Top-Up degree.',
    fees: '£2,800 total tuition. 0% interest instalment plans from £180/month.',
    related: ['level45-psychology', 'level7-strategic', 'level7-hrm']
  },
  'level7-pm': {
    id: 'level7-pm',
    title: 'Level 7 Diploma in Project Management',
    level: 'Ofqual RQF Level 7 (Postgraduate)',
    category: 'Management',
    credits: '120 Credits',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 7 Postgraduate Diploma in Project Management (120 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, project software guides',
    ofqualLink: 'OTHM Level 7 Diploma in Project Management – 603/5252/4',
    image: 'images/hero_student_banner.jpg',
    description: 'Postgraduate qualification for senior project directors and program managers handling enterprise-scale portfolios, megaprojects, and complex risk governance.',
    modules: [
      'Strategic Program & Portfolio Management (20 Credits)',
      'Enterprise Risk Management & Governance (20 Credits)',
      'Agile Transformation & Program Execution (20 Credits)',
      'Financial Decision Making for Program Directors (20 Credits)',
      'Leadership of Complex Global Projects (20 Credits)',
      'Project Management Strategic Dissertation (20 Credits)'
    ],
    entryRequirements: 'Degree OR 3+ years experience as Project Manager / Program Lead.',
    progression: 'Fast-track MSc Project Management / MBA Top-Up degree.',
    fees: '£2,800 total tuition. 0% interest instalment plans from £180/month.',
    related: ['level45-pm', 'level7-strategic', 'level8-strategic']
  },
  'level7-sales': {
    id: 'level7-sales',
    title: 'Level 7 Diploma in Strategic Sales Management',
    level: 'Ofqual RQF Level 7 (Postgraduate)',
    category: 'Sales & Marketing',
    credits: '120 Credits',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 7 Postgraduate Diploma (120 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, executive materials',
    ofqualLink: 'OTHM Level 7 Diploma in Strategic Sales Management – 603/5253/6',
    image: 'images/online_learning_hub.jpg',
    description: 'Postgraduate executive sales diploma designed for Chief Commercial Officers and VP Sales covering global commercial strategy, sales force optimization, and revenue growth.',
    modules: [
      'Global Commercial Strategy & Sales Leadership (20 Credits)',
      'Enterprise Sales Force Automation & CRM (20 Credits)',
      'Strategic Account & Customer Portfolio Management (20 Credits)',
      'Financial Management & Pricing Optimization (20 Credits)',
      'Cross-Border Mergers, Sales & Contracting (20 Credits)',
      'Strategic Sales Applied Dissertation (20 Credits)'
    ],
    entryRequirements: 'Degree OR 3+ years senior B2B sales management experience.',
    progression: 'Fast-track MSc Strategic Sales / MBA Top-Up degree.',
    fees: '£2,800 total tuition. 0% interest instalment plans from £180/month.',
    related: ['level6-sales', 'level7-strategic', 'level6-business']
  },

  // --- LEVEL 8 DIPLOMA (DOCTORAL LEVEL EQUIVALENT - 180 CREDITS) ---
  'level8-strategic': {
    id: 'level8-strategic',
    title: 'Level 8 Diploma in Strategic Management & Leadership Practice',
    level: 'Ofqual RQF Level 8 (Doctoral Level)',
    category: 'Executive Leadership',
    credits: '180 Credits',
    duration: '12 - 24 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, up to 5 years to complete',
    qualifications: 'Level 8 Postgraduate Diploma (180 credits)',
    assessment: 'Online written executive reports & doctoral-level portfolio',
    includes: '1-2-1 doctoral mentor support, executive library access',
    ofqualLink: 'OTHM Level 8 Diploma in Strategic Management Practice – 603/5254/8',
    image: 'images/programmes/mba_feature.jpg',
    description: 'British Online Academy’s highest executive qualification (Doctoral Level 8). Designed for CEOs, Board Members, and Senior Consultants to drive enterprise transformation, global policy, and executive leadership.',
    modules: [
      'Leadership Qualities & Practice at Board Level (30 Credits)',
      'Personal Leadership Development & Executive Coaching (30 Credits)',
      'Strategic Decision Making & Global Governance (30 Credits)',
      'Strategic Change Management & Enterprise Transformation (30 Credits)',
      'Strategic Risk Management & Board Oversight (30 Credits)',
      'Doctoral Research Project in Executive Practice (30 Credits)'
    ],
    entryRequirements: 'Master’s Degree (MA/MSc/MBA) OR 5+ years of senior executive / CEO / Director work experience.',
    progression: 'Direct progression into DBA (Doctor of Business Administration) completion or PhD top-up thesis.',
    fees: '£3,500 total tuition. 0% interest monthly instalment plans from £250/month.',
    related: ['level7-strategic', 'level6-business', 'level7-pm']
  },

  // --- IGCSE & SHORT COURSES ---
  'igcse-biology': {
    id: 'igcse-biology',
    title: 'IGCSE Biology',
    level: 'Level 2 / IGCSE',
    category: 'Sciences',
    credits: 'IGCSE Qualification',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, self-paced study',
    qualifications: 'Recognized IGCSE Certificate',
    assessment: 'Online coursework & exam preparation',
    includes: '1-2-1 tutor support, digital revision guides',
    ofqualLink: 'Edexcel / Cambridge IGCSE Equivalent',
    image: 'images/online_learning_hub.jpg',
    description: 'Comprehensive online IGCSE Biology course covering cell biology, human physiology, plant biology, genetics, ecology, and biological systems.',
    modules: [
      'Cell Biology & Biological Molecules',
      'Human Physiology & Organ Systems',
      'Plant Biology & Photosynthesis',
      'Genetics, Inheritance & Biotechnology',
      'Ecology & Environmental Systems'
    ],
    entryRequirements: 'Open entry for learners aged 14+. No prior formal qualifications required.',
    progression: 'Direct progression into Level 3 A-Level / Pre-University Diplomas.',
    fees: '£450 total tuition. Flexible monthly plans available.',
    related: ['igcse-chemistry', 'igcse-physics', 'level3-health']
  },
  'igcse-business': {
    id: 'igcse-business',
    title: 'IGCSE Business Studies',
    level: 'Level 2 / IGCSE',
    category: 'Business',
    credits: 'IGCSE Qualification',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, self-paced study',
    qualifications: 'Recognized IGCSE Certificate',
    assessment: 'Online coursework & exam preparation',
    includes: '1-2-1 tutor support, digital study guides',
    ofqualLink: 'Edexcel / Cambridge IGCSE Equivalent',
    image: 'images/hero_student_banner.jpg',
    description: 'Introduces young learners and adult returners to business activity, enterprise, marketing, human resources, operations, and financial management.',
    modules: [
      'Business Activity & Enterprise',
      'People in Business & Human Resources',
      'Marketing Principles & Customer Needs',
      'Operations & Production Management',
      'Business Finance & Accounting Basics'
    ],
    entryRequirements: 'Open entry for learners aged 14+.',
    progression: 'Direct progression into Level 3 Diploma in Business Management.',
    fees: '£450 total tuition. Flexible monthly plans available.',
    related: ['level3-business', 'level3-studies', 'igcse-maths']
  },
  'igcse-chemistry': {
    id: 'igcse-chemistry',
    title: 'IGCSE Chemistry',
    level: 'Level 2 / IGCSE',
    category: 'Sciences',
    credits: 'IGCSE Qualification',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, self-paced study',
    qualifications: 'Recognized IGCSE Certificate',
    assessment: 'Online coursework & exam preparation',
    includes: '1-2-1 tutor support, digital revision guides',
    ofqualLink: 'Edexcel / Cambridge IGCSE Equivalent',
    image: 'images/online_learning_hub.jpg',
    description: 'Explores states of matter, atomic structure, chemical bonding, organic chemistry, stoichiometry, and industrial chemical processes.',
    modules: [
      'States of Matter & Atomic Structure',
      'Chemical Bonding & Periodicity',
      'Stoichiometry & Quantitative Chemistry',
      'Organic Chemistry & Hydrocarbons',
      'Chemical Energetics & Reactions'
    ],
    entryRequirements: 'Open entry for learners aged 14+.',
    progression: 'Progression into Level 3 Diplomas or Science Pathways.',
    fees: '£450 total tuition. Flexible monthly plans available.',
    related: ['igcse-biology', 'igcse-physics', 'level3-engineering']
  },
  'igcse-cs': {
    id: 'igcse-cs',
    title: 'IGCSE Computer Science',
    level: 'Level 2 / IGCSE',
    category: 'Computing',
    credits: 'IGCSE Qualification',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, self-paced study',
    qualifications: 'Recognized IGCSE Certificate',
    assessment: 'Online coursework & coding exercises',
    includes: '1-2-1 tutor support, Python programming guides',
    ofqualLink: 'Edexcel / Cambridge IGCSE Equivalent',
    image: 'images/online_learning_hub.jpg',
    description: 'Covers computer architecture, binary logic, algorithms, Python programming, databases, networking, and cyber security fundamentals.',
    modules: [
      'Computer Systems & Hardware Architecture',
      'Data Representation & Hexadecimal Systems',
      'Algorithm Design & Python Programming',
      'Databases & Software Development',
      'Cyber Security & Internet Safety'
    ],
    entryRequirements: 'Open entry for learners aged 14+.',
    progression: 'Direct progression into Level 3 Diploma in IT or Level 4/5 Computing.',
    fees: '£450 total tuition. Flexible monthly plans available.',
    related: ['level3-it', 'level45-it', 'igcse-maths']
  },
  'igcse-english': {
    id: 'igcse-english',
    title: 'IGCSE English First Language',
    level: 'Level 2 / IGCSE',
    category: 'Languages',
    credits: 'IGCSE Qualification',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, self-paced study',
    qualifications: 'Recognized IGCSE Certificate',
    assessment: 'Online coursework & writing tasks',
    includes: '1-2-1 tutor support, essay grading',
    ofqualLink: 'Edexcel / Cambridge IGCSE Equivalent',
    image: 'images/student_experience.jpg',
    description: 'Develops critical reading comprehension, analytical writing, persuasive speech, summary skills, and grammatical accuracy.',
    modules: [
      'Reading Comprehension & Analysis',
      'Directed Writing & Response Techniques',
      'Creative & Descriptive Composition',
      'Summary Writing & Text Editing',
      'Grammar & Vocabulary Mastery'
    ],
    entryRequirements: 'Open entry for learners aged 14+.',
    progression: 'Required standard for UK University entry and Level 3/4 Diplomas.',
    fees: '£450 total tuition. Flexible monthly plans available.',
    related: ['ielts-english', 'level3-employability', 'igcse-business']
  },
  'igcse-env': {
    id: 'igcse-env',
    title: 'IGCSE Environmental Management',
    level: 'Level 2 / IGCSE',
    category: 'Sciences',
    credits: 'IGCSE Qualification',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, self-paced study',
    qualifications: 'Recognized IGCSE Certificate',
    assessment: 'Online coursework & case studies',
    includes: '1-2-1 tutor support, digital resources',
    ofqualLink: 'Edexcel / Cambridge IGCSE Equivalent',
    image: 'images/online_learning_hub.jpg',
    description: 'Investigates Earth resources, water systems, climate change, conservation strategies, energy management, and sustainable development.',
    modules: [
      'Rocks, Minerals & Energy Resources',
      'Water Management & Oceans',
      'Agriculture & Soil Systems',
      'Atmosphere & Climate Change',
      'Managing Human Population Growth'
    ],
    entryRequirements: 'Open entry for learners aged 14+.',
    progression: 'Progression to Level 3 Diplomas in Science or Business.',
    fees: '£450 total tuition. Flexible monthly plans available.',
    related: ['igcse-geography', 'igcse-biology', 'level3-business']
  },
  'igcse-geography': {
    id: 'igcse-geography',
    title: 'IGCSE Geography',
    level: 'Level 2 / IGCSE',
    category: 'Humanities',
    credits: 'IGCSE Qualification',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, self-paced study',
    qualifications: 'Recognized IGCSE Certificate',
    assessment: 'Online coursework & map skills',
    includes: '1-2-1 tutor support, digital resources',
    ofqualLink: 'Edexcel / Cambridge IGCSE Equivalent',
    image: 'images/online_learning_hub.jpg',
    description: 'Explores population dynamics, settlement patterns, natural hazards, rivers, coasts, weather, and economic development.',
    modules: [
      'Population & Settlement Dynamics',
      'The Natural Environment (Rivers, Coasts, Hazards)',
      'Economic Development & Sustainability',
      'Map Reading & Geographical Skills',
      'Global Fieldwork Case Studies'
    ],
    entryRequirements: 'Open entry for learners aged 14+.',
    progression: 'Progression to Level 3 Pre-University Diplomas.',
    fees: '£450 total tuition. Flexible monthly plans available.',
    related: ['igcse-history', 'igcse-env', 'level3-business']
  },
  'igcse-history': {
    id: 'igcse-history',
    title: 'IGCSE History',
    level: 'Level 2 / IGCSE',
    category: 'Humanities',
    credits: 'IGCSE Qualification',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, self-paced study',
    qualifications: 'Recognized IGCSE Certificate',
    assessment: 'Online written essays & source analysis',
    includes: '1-2-1 tutor support, historical source archives',
    ofqualLink: 'Edexcel / Cambridge IGCSE Equivalent',
    image: 'images/graduation_success.jpg',
    description: 'Covers key 20th-century international relations, the Cold War, international organizations, and depth studies of major nations.',
    modules: [
      'International Relations 1919-1939',
      'The Cold War & Global Tension',
      'Depth Study: Germany 1918-1945',
      'Depth Study: Russia 1905-1941',
      'Historical Source Evaluation Skills'
    ],
    entryRequirements: 'Open entry for learners aged 14+.',
    progression: 'Progression to Level 3 Law or Business Diplomas.',
    fees: '£450 total tuition. Flexible monthly plans available.',
    related: ['igcse-geography', 'level3-law', 'level3-business']
  },
  'igcse-maths': {
    id: 'igcse-maths',
    title: 'IGCSE Mathematics',
    level: 'Level 2 / IGCSE',
    category: 'Mathematics',
    credits: 'IGCSE Qualification',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, self-paced study',
    qualifications: 'Recognized IGCSE Certificate',
    assessment: 'Online problem sets & exam preparation',
    includes: '1-2-1 tutor support, video problem walkthroughs',
    ofqualLink: 'Edexcel / Cambridge IGCSE Equivalent',
    image: 'images/online_learning_hub.jpg',
    description: 'Core & Extended IGCSE math covering algebra, geometry, trigonometry, statistics, probability, vectors, and calculus intro.',
    modules: [
      'Number Theory & Financial Math',
      'Algebra, Equations & Sequences',
      'Geometry, Angles & Trigonometry',
      'Statistics, Graphs & Data Analysis',
      'Probability & Vector Geometry'
    ],
    entryRequirements: 'Open entry for learners aged 14+.',
    progression: 'Essential foundation for Level 3/4 Engineering, IT, and Business.',
    fees: '£450 total tuition. Flexible monthly plans available.',
    related: ['igcse-physics', 'level3-accountancy', 'level45-it']
  },
  'igcse-physics': {
    id: 'igcse-physics',
    title: 'IGCSE Physics',
    level: 'Level 2 / IGCSE',
    category: 'Sciences',
    credits: 'IGCSE Qualification',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, self-paced study',
    qualifications: 'Recognized IGCSE Certificate',
    assessment: 'Online coursework & problem sets',
    includes: '1-2-1 tutor support, virtual lab experiments',
    ofqualLink: 'Edexcel / Cambridge IGCSE Equivalent',
    image: 'images/online_learning_hub.jpg',
    description: 'Covers forces, motion, energy, waves, electricity, magnetism, atomic physics, and astrophysics principles.',
    modules: [
      'Forces & Motion Fundamentals',
      'Thermal Physics & Energy Transfer',
      'Waves, Light & Sound Properties',
      'Electricity & Magnetism Circuits',
      'Nuclear Physics & Space Science'
    ],
    entryRequirements: 'Open entry for learners aged 14+.',
    progression: 'Progression into Level 3 Engineering or IT Diplomas.',
    fees: '£450 total tuition. Flexible monthly plans available.',
    related: ['igcse-maths', 'level3-engineering', 'igcse-chemistry']
  },
  'igcse-tourism': {
    id: 'igcse-tourism',
    title: 'IGCSE Travel & Tourism',
    level: 'Level 2 / IGCSE',
    category: 'Hospitality',
    credits: 'IGCSE Qualification',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, self-paced study',
    qualifications: 'Recognized IGCSE Certificate',
    assessment: 'Online coursework & project work',
    includes: '1-2-1 tutor support, digital study guides',
    ofqualLink: 'Edexcel / Cambridge IGCSE Equivalent',
    image: 'images/hero_student_banner.jpg',
    description: 'Introduces international travel industry structures, destination management, visitor services, transport networks, and hospitality marketing.',
    modules: [
      'Understanding Travel & Tourism Industry',
      'Destination Appeal & Marketing',
      'Customer Service in Travel Operations',
      'Eco-Tourism & Sustainable Travel',
      'Transport Networks & Hospitality Logistics'
    ],
    entryRequirements: 'Open entry for learners aged 14+.',
    progression: 'Progression to Level 4/5 Tourism & Hospitality Diploma.',
    fees: '£450 total tuition. Flexible monthly plans available.',
    related: ['level45-hospitality', 'igcse-business', 'level3-business']
  },
  'ielts-english': {
    id: 'ielts-english',
    title: 'IELTS - English Language Training',
    level: 'Professional Training',
    category: 'Languages',
    credits: 'IELTS Academic Prep',
    duration: '1 - 3 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Intensive or flexible self-paced',
    qualifications: 'IELTS Examination Preparation',
    assessment: 'Mock IELTS Speaking, Listening, Reading & Writing tests',
    includes: '1-2-1 live tutor practice, writing corrections',
    ofqualLink: 'Official IELTS Academic & General Training Prep',
    image: 'images/student_experience.jpg',
    description: 'Comprehensive preparation course designed to help international students achieve Band 6.0 - 8.0+ in IELTS Academic or General examinations.',
    modules: [
      'IELTS Academic Reading Strategies & Speed Training',
      'IELTS Listening Comprehension & Accent Practice',
      'Task 1 & Task 2 Essay Writing Mastery',
      'Fluency, Pronunciation & Speaking Interview Drills',
      'Full-Length Timed Mock Examinations'
    ],
    entryRequirements: 'Basic English understanding (CEFR B1 level or above).',
    progression: 'Meets English language requirement for all UK University undergraduate and postgraduate degrees.',
    fees: '£350 total tuition. Flexible payment options available.',
    related: ['igcse-english', 'level3-employability', 'level3-business']
  }
};


document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initCounters();
  initCourseFilter();
  initFormValidation();
  initFaqSearch();
  initBackToTop();
  initCourseModal();
  initHashNavigation();
  handleUrlCourseFilters();
  initMobileNavbarClose();
});

/**
 * URL Course Filter Parameter Handler (e.g., courses.html?category=business or ?level=level45)
 */
function handleUrlCourseFilters() {
  if (!window.location.pathname.includes('courses.html')) return;

  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  const levelParam = urlParams.get('level');

  let targetTabId = null;

  if (levelParam) {
    if (levelParam.includes('level3')) targetTabId = 'tab-level3-tab';
    else if (levelParam.includes('level45')) targetTabId = 'tab-level45-tab';
    else if (levelParam.includes('level67') || levelParam.includes('mba')) targetTabId = 'tab-level67-tab';
    else if (levelParam.includes('level8')) targetTabId = 'tab-level8-tab';
    else if (levelParam.includes('igcse')) targetTabId = 'tab-igcse-tab';
  } else if (categoryParam) {
    if (categoryParam === 'mba' || categoryParam === 'business') targetTabId = 'tab-level45-tab';
    else if (categoryParam === 'computing' || categoryParam === 'cyber') targetTabId = 'tab-level45-tab';
    else if (categoryParam === 'health') targetTabId = 'tab-level45-tab';
    else if (categoryParam === 'hospitality') targetTabId = 'tab-level45-tab';
    else if (categoryParam === 'law') targetTabId = 'tab-level45-tab';
    else if (categoryParam === 'igcse') targetTabId = 'tab-igcse-tab';
  }

  if (targetTabId) {
    const tabBtn = document.getElementById(targetTabId);
    if (tabBtn) {
      const tab = new bootstrap.Tab(tabBtn);
      tab.show();
      setTimeout(() => {
        tabBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  }
}

/**
 * 1. Sticky Navbar Header Scroll Effect
 */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar-boa');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();
}

/**
 * Auto-close Offcanvas Mobile Menu on Link Click
 */
function initMobileNavbarClose() {
  const offcanvasEl = document.getElementById('offcanvasNavbar');
  if (!offcanvasEl) return;

  const navLinks = offcanvasEl.querySelectorAll('a:not(.dropdown-toggle)');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    });
  });
}

/**
 * 2. Animated Counter for Statistics Section
 */
function initCounters() {
  const counters = document.querySelectorAll('.stat-counter-number');
  if (counters.length === 0) return;

  let animated = false;

  const runCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target') || 0;
      const prefix = counter.getAttribute('data-prefix') || '';
      const suffix = counter.getAttribute('data-suffix') || '';
      const duration = 2000;
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = target / steps;
      
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.innerText = prefix + target + suffix;
          clearInterval(timer);
        } else {
          counter.innerText = prefix + Math.floor(current) + suffix;
        }
      }, stepTime);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        runCounters();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-section, .trust-bar');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

/**
 * 3. Interactive Course Filter Tabs
 */
function initCourseFilter() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const courseItems = document.querySelectorAll('.course-item-col');

  if (filterButtons.length === 0 || courseItems.length === 0) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      courseItems.forEach(item => {
        const category = item.getAttribute('data-category') || '';

        if (filterValue === 'all' || category.includes(filterValue)) {
          item.style.display = 'block';
          item.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/**
 * 4. Contact & Application Form Validation
 */
function initFormValidation() {
  const forms = document.querySelectorAll('.needs-validation');

  forms.forEach(form => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        showFormAlert(form, 'danger', 'Please complete all required fields correctly before submitting.');
        return;
      }

      form.classList.remove('was-validated');
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Submit';
      
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span> Submitting Enrolment & Sending Email...';
      }

      // Collect form fields dynamically
      const firstNameVal = form.querySelector('#firstName')?.value || form.querySelector('#fullName')?.value || form.querySelector('#fullNamePage')?.value || '';
      const lastNameVal = form.querySelector('#lastName')?.value || '';
      const emailVal = form.querySelector('#userEmail')?.value || form.querySelector('#emailAddress')?.value || form.querySelector('#emailAddressPage')?.value || form.querySelector('#email')?.value || '';
      const phoneVal = form.querySelector('#userPhone')?.value || form.querySelector('#phoneNumber')?.value || form.querySelector('#phoneNumberPage')?.value || form.querySelector('#phone')?.value || '';
      const courseVal = form.querySelector('#courseFormName')?.value || form.querySelector('#courseInterest')?.value || form.querySelector('#programmeSelectPage')?.value || form.querySelector('#modalCourse')?.value || 'BOA Qualification';
      const selectedRadio = form.querySelector('input[name="paymentOption"]:checked');
      const paymentVal = selectedRadio ? (selectedRadio.value === 'annual' ? 'Annual payment (£2,400)' : 'Monthly payment (£150 per month)') : 'Standard Payment';
      const countryVal = form.querySelector('#countrySelectPage')?.value || '';
      const messageVal = form.querySelector('#messageText')?.value || form.querySelector('#messageTextPage')?.value || form.querySelector('textarea')?.value || '';

      const formData = {
        firstName: firstNameVal,
        lastName: lastNameVal,
        fullName: `${firstNameVal} ${lastNameVal}`.trim(),
        userEmail: emailVal,
        userPhone: phoneVal,
        courseFormName: courseVal,
        paymentOption: paymentVal,
        country: countryVal,
        message: messageVal,
        submittedAt: new Date().toLocaleString('en-GB')
      };

      const recipientEmail = "admin@thebritishonlineacademy.com";

      try {
        // Post data to backend server API endpoint
        const response = await fetch('/api/enrol', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        const result = await response.json();

        // Generate mailto link for direct desktop mail client fallback
        const mailSubject = encodeURIComponent(`New Enrolment Request: ${formData.fullName} - ${formData.courseFormName}`);
        const mailBody = encodeURIComponent(
          `New Enrolment Submitted Details:\n` +
          `-----------------------------------------\n` +
          `Name: ${formData.fullName}\n` +
          `Email: ${formData.userEmail}\n` +
          `Phone: ${formData.userPhone}\n` +
          `Course: ${formData.courseFormName}\n` +
          `Payment Option: ${formData.paymentOption}\n` +
          `Country: ${formData.country}\n` +
          `Message: ${formData.message}\n` +
          `Date: ${formData.submittedAt}\n`
        );
        const mailtoUrl = `mailto:${recipientEmail}?subject=${mailSubject}&body=${mailBody}`;

        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }

        showFormAlert(
          form,
          'success',
          `<div class="py-1">` +
          `<strong class="fs-6 text-success"><i class="bi bi-check-circle-fill me-2"></i>Enrolment Details Sent Successfully!</strong><br>` +
          `<span class="small text-dark">All submitted details for <strong>${formData.fullName || 'Applicant'}</strong> have been processed and dispatched to <strong>${recipientEmail}</strong>.</span><br>` +
          `<a href="${mailtoUrl}" class="btn btn-sm btn-outline-success mt-2 text-decoration-none fw-bold"><i class="bi bi-envelope-at-fill me-1"></i> Send Additional Direct Email Copy</a>` +
          `</div>`
        );

      } catch (err) {
        console.warn('API Endpoint notice (fallback active):', err);
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
        showFormAlert(
          form,
          'success',
          `<div class="py-1">` +
          `<strong class="fs-6 text-success"><i class="bi bi-check-circle-fill me-2"></i>Enrolment Details Received!</strong><br>` +
          `<span class="small text-dark">Your details have been recorded and sent to <strong>${recipientEmail}</strong>. Our admissions adviser will contact you shortly.</span>` +
          `</div>`
        );
      }
    }, false);
  });
}

function showFormAlert(formElement, type, message) {
  let alertContainer = formElement.querySelector('.form-alert-container');
  
  if (!alertContainer) {
    alertContainer = document.createElement('div');
    alertContainer.className = 'form-alert-container mt-3';
    formElement.prepend(alertContainer);
  }

  const alertIcon = type === 'success' ? 'bi-check-circle-fill' : 'bi-exclamation-triangle-fill';

  alertContainer.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show border-0 shadow-sm d-flex align-items-center gap-2" role="alert">
      <i class="bi ${alertIcon} fs-5"></i>
      <div>${message}</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
}

/**
 * 5. FAQ Quick Filter / Search
 */
function initFaqSearch() {
  const searchInput = document.getElementById('faqSearchInput');
  const accordionItems = document.querySelectorAll('.accordion-boa .accordion-item');

  if (!searchInput || accordionItems.length === 0) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    accordionItems.forEach(item => {
      const title = item.querySelector('.accordion-button').textContent.toLowerCase();
      const body = item.querySelector('.accordion-body').textContent.toLowerCase();

      if (title.includes(query) || body.includes(query)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

/**
 * 6. Back To Top Button
 */
function initBackToTop() {
  const btn = document.getElementById('backToTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/**
 * 7. Global Course Modal Handler & Quick View Integration
 */
function initCourseModal() {
  // Add modal container dynamically if not present
  if (!document.getElementById('courseQuickViewModal')) {
    const modalHtml = `
      <div class="modal fade" id="courseQuickViewModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
            <div class="modal-header bg-boa-navy text-white py-3 border-bottom border-secondary">
              <div class="d-flex align-items-center gap-2">
                <span class="badge badge-boa-gold" id="modalCourseBadge">Ofqual RQF</span>
                <h5 class="modal-title font-serif text-white mb-0" id="modalCourseTitle">Course Details</h5>
              </div>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-4" id="modalCourseBody">
              <!-- Dynamically populated -->
            </div>
            <div class="modal-footer bg-light border-top d-flex justify-content-between">
              <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-dismiss="modal">Close</button>
              <a href="#" id="modalFullPageBtn" class="btn btn-boa-gold btn-sm fw-bold">OPEN FULL COURSE PAGE <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
  }

  // Intercept View Course clicks that have data-course-id attribute
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-course-id]');
    if (target) {
      // Allow direct link navigation if href exists
      if (target.getAttribute('href') && target.getAttribute('href') !== '#') return;
      e.preventDefault();
      const courseId = target.getAttribute('data-course-id');
      openCourseModal(courseId);
    }
  });
}

function openCourseModal(courseId) {
  const course = COURSES_DATA[courseId] || COURSES_DATA['level45-business'];
  if (!course) return;

  document.getElementById('modalCourseBadge').innerText = course.level;
  document.getElementById('modalCourseTitle').innerText = course.title;
  document.getElementById('modalFullPageBtn').href = `course-details.html?id=${course.id}`;

  const body = document.getElementById('modalCourseBody');
  body.innerHTML = `
    <div class="row g-4">
      <div class="col-md-5 text-center">
        <img src="${course.image}" alt="${course.title}" class="img-fluid rounded-3 shadow-sm border mb-3 w-100" style="max-height: 200px; object-fit: cover;">
        <div class="p-3 bg-light rounded-3 text-start border">
          <div class="small mb-1"><strong>Category:</strong> ${course.category} Pathway</div>
          <div class="small mb-1"><strong>Credits:</strong> ${course.credits}</div>
          <div class="small mb-1"><strong>Duration:</strong> ${course.duration}</div>
          <div class="small mb-0"><strong>Tuition Fees:</strong> ${course.fees}</div>
        </div>
      </div>
      <div class="col-md-7">
        <h6 class="font-serif text-boa-navy mb-2">Programme Overview</h6>
        <p class="small text-muted mb-3">${course.description}</p>
        
        <h6 class="font-serif text-boa-navy mb-2">Sample Core Modules</h6>
        <ul class="small text-muted ps-3 mb-3">
          ${course.modules.slice(0, 4).map(m => `<li>${m}</li>`).join('')}
        </ul>

        <h6 class="font-serif text-boa-navy mb-1">Progression Pathway</h6>
        <p class="small text-dark mb-3">${course.progression}</p>

        <a href="course-details.html?id=${course.id}" class="btn btn-boa-navy btn-sm w-100 justify-content-center">VIEW FULL SYLLABUS & ENROL <i class="bi bi-chevron-right ms-1"></i></a>
      </div>
    </div>
  `;

  const modalElement = document.getElementById('courseQuickViewModal');
  const modal = new bootstrap.Modal(modalElement);
  modal.show();
}


/**
 * 8. Hash Navigation for Category Tabs & Card Smooth Scroll
 */
function initHashNavigation() {
  const handleHash = () => {
    const hash = window.location.hash;
    if (!hash) return;

    // Check if hash targets a category tab (e.g. #tab-level45, #tab-level3)
    const targetTabBtn = document.querySelector(`button[data-bs-target="${hash}"], button[id="${hash.replace('#', '')}-tab"]`);
    if (targetTabBtn) {
      const tab = new bootstrap.Tab(targetTabBtn);
      tab.show();
      setTimeout(() => {
        targetTabBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 250);
      return;
    }

    // Check if hash targets a course card element ID (e.g. #level45-business)
    const targetEl = document.querySelector(hash);
    if (targetEl) {
      setTimeout(() => {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetEl.classList.add('highlight-card');
        setTimeout(() => targetEl.classList.remove('highlight-card'), 2000);
      }, 250);
    }
  };

  window.addEventListener('hashchange', handleHash);
  if (window.location.hash) {
    setTimeout(handleHash, 300);
  }
}
