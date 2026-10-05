/**
 * British Online Academy (BOA) - Master Interactive Script & Course Dataset
 * Includes course datasets, navigation handlers, statistics counters, form validation,
 * course filtering, dynamic modal popups, and smooth UI interactions.
 */

// Global Master Dataset for all British Online Academy Programmes
const COURSES_DATA = {
  'level3-business': {
    id: 'level3-business',
    title: 'Level 3 Diploma in Business Management',
    level: 'Ofqual RQF Level 3',
    category: 'Business',
    credits: '120 Credits',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, you have up to 5 years to complete this course',
    qualifications: 'Level 3 Diploma (120 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, FREE laptop*, all course materials and more',
    ofqualLink: 'OTHM Level 3 Diploma in Business Management – 603/7795/1',
    image: 'images/hero_student_banner.jpg',
    description: 'The Level 3 Business Management course is a 120 credit qualification (equivalent to 2 A Levels). It has been specifically developed to provide the knowledge required for students to work effectively, both as individuals and within teams within business.',
    modules: [
      'An Introduction to Business Environment (20 Credits)',
      'Business Resources & Operational Management (20 Credits)',
      'An Introduction to Marketing & Customer Relations (20 Credits)',
      'Business Communication & Professional Writing (20 Credits)',
      'Personal Effectiveness & Productivity (20 Credits)',
      'Customer Service Principles (20 Credits)'
    ],
    entryRequirements: 'Open entry for learners aged 16+ with basic English language proficiency. No prior formal business qualifications required.',
    progression: 'Direct progression into Level 4/5 Business Management Diploma or Year 1 of a UK University Bachelor Degree.',
    fees: '£1,200 total tuition. 0% interest monthly payment options available from £100/month.'
  },
  'level45-business': {
    id: 'level45-business',
    title: 'Level 4 & 5 Diploma in Business Management',
    level: 'Ofqual RQF Level 4 & 5',
    category: 'Business',
    credits: '240 Credits',
    duration: '12 - 18 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, you have up to 5 years to complete this course',
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
    fees: '£2,400 total tuition. 0% interest instalment plans available from £150/month.'
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
    studyPace: 'Flexible, you have up to 5 years to complete this course',
    qualifications: 'Level 4 & 5 Diploma in Computing (240 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, FREE laptop*, all course materials and more',
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
    entryRequirements: 'Level 3 qualification or basic IT background / relevant technical experience.',
    progression: 'Direct progression into Final Year BSc (Hons) Computing, Information Systems, or Software Engineering Top-Up at UK universities.',
    fees: '£2,400 total tuition. 0% interest instalment plans available from £150/month.'
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
    studyPace: 'Flexible, you have up to 5 years to complete this course',
    qualifications: 'Level 4 & 5 Diploma in Health & Social Care (240 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, FREE laptop*, all course materials and more',
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
    fees: '£2,400 total tuition. 0% interest instalment plans available from £150/month.'
  },
  'level45-hospitality': {
    id: 'level45-hospitality',
    title: 'Level 4 & 5 Diploma in Hotel & Hospitality Management',
    level: 'Ofqual RQF Level 4 & 5',
    category: 'Hospitality',
    credits: '240 Credits',
    duration: '12 - 18 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, you have up to 5 years to complete this course',
    qualifications: 'Level 4 & 5 Diploma in Tourism & Hospitality (240 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, FREE laptop*, all course materials and more',
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
    progression: 'Direct progression into Final Year BA (Hons) International Hospitality Management Top-Up degree.',
    fees: '£2,400 total tuition. 0% interest instalment plans available from £150/month.'
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
    studyPace: 'Flexible, you have up to 5 years to complete this course',
    qualifications: 'Level 4 & 5 Diploma in Law (240 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, FREE laptop*, all course materials and more',
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
    fees: '£2,500 total tuition. 0% interest instalment plans available from £160/month.'
  },
  'level7-strategic': {
    id: 'level7-strategic',
    title: 'Level 7 Diploma in Strategic Management & Leadership (MBA Pathway)',
    level: 'Ofqual RQF Level 7 (Postgraduate)',
    category: 'Business',
    credits: '120 Credits',
    duration: '6 - 12 Months',
    startDate: 'Anytime',
    location: 'Online',
    studyPace: 'Flexible, you have up to 5 years to complete this course',
    qualifications: 'Level 7 Postgraduate Diploma (120 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, FREE laptop*, all course materials and more',
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
    fees: '£2,800 total tuition. 0% interest instalment plans available from £180/month.'
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
    studyPace: 'Flexible, you have up to 5 years to complete this course',
    qualifications: 'Level 7 Postgraduate Diploma (120 credits)',
    assessment: 'Online written assignments',
    includes: '1-2-1 tutor support, FREE laptop*, all course materials and more',
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
    fees: '£2,800 total tuition. 0% interest instalment plans available from £180/month.'
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
});

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
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        showFormAlert(form, 'danger', 'Please complete all required fields correctly before submitting.');
      } else {
        form.classList.remove('was-validated');
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Submit';
        
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span> Processing Enquiry...';
        }

        setTimeout(() => {
          form.reset();
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
          }
          showFormAlert(form, 'success', 'Thank you for your enquiry. A British Online Academy adviser will contact you shortly.');
        }, 1200);
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
