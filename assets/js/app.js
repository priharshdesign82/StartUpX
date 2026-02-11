  // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    
    // Mobile Menu
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileClose = document.getElementById('mobileClose');
    
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.add('active');
    });
    
    mobileClose.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
    
    // Close mobile menu on outside click
    document.addEventListener('click', (e) => {
      if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
      }
    });
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.startupx-header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Close mobile menu
          mobileMenu.classList.remove('active');
        }
      });
    });
    
    // Animate chart bars on scroll
    const animateBars = () => {
      const chartBars = document.querySelectorAll('.chart-bar');
      chartBars.forEach((bar, index) => {
        setTimeout(() => {
          bar.style.height = bar.style.height;
        }, index * 100);
      });
    };
    
    // Run animations when hero section is in view
    const heroSection = document.querySelector('.hero');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateBars();
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(heroSection);

    