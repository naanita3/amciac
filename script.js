// Inicializar AOS (Animate on Scroll)
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

//Loader
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  loader.style.animation = "fadeOut 0.6s ease forwards";
  setTimeout(() => loader.remove(), 600);
});

// Cookies
const cookieBanner = document.getElementById("cookie-banner");
const acceptCookies = document.getElementById("accept-cookies");

if (localStorage.getItem("cookiesAccepted")) {
  cookieBanner.style.display = "none";
}

acceptCookies.addEventListener("click", () => {
  localStorage.setItem("cookiesAccepted", "true");
  cookieBanner.style.display = "none";
});

// Menu
const menuToggle = document.getElementById("menuToggle");
const closeMenu = document.getElementById("closeMenu");
const mainNav = document.getElementById("mainNav");

/* Abrir / cerrar menú móvil */
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
      // 📱 Mobile: abrir dropdown, NO cerrar menú
      e.preventDefault();
      parent.classList.toggle("open");
    } else {
      // ✅ Link normal: cerrar menú
      mainNav.classList.remove("active");
    }
  });
});

// Carrusel de aliados (automático)
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

// Carrusel adaptable
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

// Carrusel BANNERRS
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

// Animación de estadísticas
function animateStats() {
  const statsSection = document.querySelector(".stats-section");
  const statNumbers = document.querySelectorAll(".stat-number");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          statNumbers.forEach((stat) => {
            const target = parseInt(stat.getAttribute("data-count"));
            const duration = 2000; // 2 segundos
            const step = target / (duration / 16); // 60fps
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

          // Dejar de observar después de la animación
          observer.unobserve(statsSection);
        }
      });
    },
    { threshold: 0.5 },
  );

  observer.observe(statsSection);
}

// Llamar a la animación de estadísticas
animateStats();

// Manejo del formulario
const contactForm = document.getElementById("contactForm");

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

// Cambiar header al hacer scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(0, 65, 109, 0.95)";
    header.style.padding = "15px 5%";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.padding = "20px 5%";
  }
});
