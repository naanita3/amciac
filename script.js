// ================= INICIALIZACIÓN GENERAL =================
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar AOS (Animate on Scroll) si no se ha inicializado
  if (typeof AOS !== 'undefined' && !AOS.initialized) {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
    AOS.initialized = true;
  }

  // ================= LOADER =================
  const loader = document.getElementById("page-loader");
  if (loader) {
    window.addEventListener("load", () => {
      loader.style.animation = "fadeOut 0.6s ease forwards";
      setTimeout(() => loader.remove(), 600);
    });
  }

  // ================= COOKIES =================
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptCookies = document.getElementById("accept-cookies");
  
  if (cookieBanner && acceptCookies) {
    if (localStorage.getItem("cookiesAccepted")) {
      cookieBanner.style.display = "none";
    }

    acceptCookies.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "true");
      cookieBanner.style.display = "none";
    });
  }

  // ================= MENÚ =================
  const menuToggle = document.getElementById("menuToggle");
  const closeMenu = document.getElementById("closeMenu");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && closeMenu && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.add("active");
    });

    closeMenu.addEventListener("click", () => {
      mainNav.classList.remove("active");
    });

    /* DROPDOWNS + LINKS */
    document.querySelectorAll("nav ul li > a").forEach((link) => {
      link.addEventListener("click", (e) => {
        const parent = link.parentElement;
        const isDropdown = parent.classList.contains("dropdown-item");

        if (window.innerWidth <= 768 && isDropdown) {
          e.preventDefault();
          parent.classList.toggle("open");
        } else {
          mainNav.classList.remove("active");
        }
      });
    });
  }

  // ================= CARRUSELES =================
  // Solo inicializar si existen los elementos
  if (document.querySelector(".aliados-slider")) {
    const aliadosSwiper = new Swiper(".aliados-slider", {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      speed: 1000,
      breakpoints: {
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
      },
    });
  }

  if (document.querySelector(".carrusel-adaptable")) {
    const carruselAdaptable = new Swiper(".carrusel-adaptable", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 1000,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    });
  }

  if (document.querySelector(".carrusel-banners-proveedores")) {
    const bannersSwiper = new Swiper(".carrusel-banners-proveedores", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      speed: 900,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // ================= ANIMACIÓN DE ESTADÍSTICAS =================
  function animateStats() {
    const statsSection = document.querySelector(".stats-section");
    if (!statsSection) return;

    const statNumbers = document.querySelectorAll(".stat-number");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            statNumbers.forEach((stat) => {
              const target = parseInt(stat.getAttribute("data-count"));
              const duration = 2000;
              const step = target / (duration / 16);
              let current = 0;

              const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                  stat.textContent = target + "+";
                  clearInterval(timer);
                } else {
                  stat.textContent = Math.floor(current);
                }
              }, 16);
            });

            observer.unobserve(statsSection);
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(statsSection);
  }

  animateStats();

  // ================= FORMULARIO =================
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitBtn = this.querySelector(".btn-submit");
      const originalText = submitBtn.textContent;

      submitBtn.textContent = "Enviando...";
      submitBtn.disabled = true;

      emailjs
        .sendForm("service_amci", "template_nowidhb", this)
        .then(() => {
          alert("¡Gracias por tu interés! Te contactaremos pronto.");
          contactForm.reset();
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        })
        .catch((error) => {
          alert("Error al enviar. Intenta de nuevo.");
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          console.error(error);
        });
    });
  }

  // ================= HEADER AL SCROLL =================
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (!header) return;
    
    if (window.scrollY > 100) {
      header.style.backgroundColor = "rgba(0, 65, 109, 0.95)";
      header.style.padding = "15px 5%";
    } else {
      header.style.backgroundColor = "transparent";
      header.style.padding = "20px 5%";
    }
  });

  // ================= BOTÓN VOLVER ARRIBA =================
  // Crear el botón dinámicamente (solo si no existe)
  if (!document.getElementById('globalScrollToTop')) {
    const scrollToTopBtn = document.createElement('a');
    scrollToTopBtn.href = '#';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.id = 'globalScrollToTop';
    scrollToTopBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
    scrollToTopBtn.setAttribute('aria-label', 'Volver arriba');
    scrollToTopBtn.setAttribute('title', 'Volver al inicio');
    
    document.body.appendChild(scrollToTopBtn);
  }
  
  const btn = document.getElementById('globalScrollToTop');
  
  if (btn) {
    // Mostrar/ocultar según scroll
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });
    
    // Scroll suave al hacer clic
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      // Cerrar menú móvil si está abierto
      const mainNav = document.getElementById('mainNav');
      if (mainNav && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
      }
    });
  }
  
  // ================= SCROLL SUAVE PARA ENLACES INTERNOS =================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Excluir enlaces que no deben tener scroll suave
    if (anchor.classList.contains('no-smooth-scroll') || 
        anchor.hasAttribute('data-no-smooth') ||
        anchor.closest('.swiper-button-next') || 
        anchor.closest('.swiper-button-prev') ||
        anchor.getAttribute('href') === '#') {
      return;
    }
    
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href === '#') {
        e.preventDefault();
        return;
      }
      
      const targetElement = document.querySelector(href);
      
      if (targetElement) {
        e.preventDefault();
        
        // Calcular posición considerando header fijo
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Cerrar menú móvil si está abierto
        const mainNav = document.getElementById('mainNav');
        if (mainNav && mainNav.classList.contains('active')) {
          mainNav.classList.remove('active');
        }
      }
    });
  });
});