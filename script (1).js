
document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
      navLinks.classList.remove('active');
    });
  });

  // Form validation and submission
  const contactForm = document.getElementById('contactForm');
  const auditForm = document.getElementById('auditForm');

  function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        input.classList.add('error');
        isValid = false;
      } else {
        input.classList.remove('error');
      }
      
      if (input.type === 'email' && !input.value.includes('@')) {
        input.classList.add('error');
        isValid = false;
      }
    });
    
    return isValid;
  }

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm(contactForm)) {
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    } else {
      alert('Please fill in all required fields correctly.');
    }
  });

  auditForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm(auditForm)) {
      alert('Thank you for requesting an IT audit! Our team will contact you within 24 hours to schedule your audit.');
      auditForm.reset();
    } else {
      alert('Please fill in all required fields correctly.');
    }
  });
});
