// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
  
    // Ensure loader is visible
    loader.style.opacity = '1';
  
    // Fade out loader after 2 seconds
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
        mainContent.classList.remove('content-hidden');
        mainContent.classList.add('content-visible');
      }, 500); // Match CSS transition
    }, 2000); // Reduced loader time for better UX
  });