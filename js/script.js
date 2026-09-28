/**
 * British Online Academy (BOA) - Master Interactive Script
 * Vanilla JavaScript implementation for navigation, filtering, modals,
 * statistics counters, form validation, and scroll interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initCounters();
  initCourseFilter();
  initFormValidation();
  initFaqSearch();
  initBackToTop();
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
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
