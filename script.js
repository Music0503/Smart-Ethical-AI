// script.js
document.addEventListener('DOMContentLoaded', () => {
  console.log('Smart & Ethical AI Website Loaded');
  
  // Highlight active link
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    if (link.href.includes(currentPath)) {
      link.classList.add('active');
    }
  });

  // Intersection Observer for Scroll Animations
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});
