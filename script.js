/* Intro sequence: flor -> ocultar intro -> mostrar main */
document.addEventListener("DOMContentLoaded", () => {
  // Intro elements
  const intro = document.getElementById("intro");
  const main = document.getElementById("main-content");

  // Typed.js para el rol
  const typed = new Typed(".typing", {
    strings: ["Desarrollador Web", "Frontend", "Automatizador Python", "Estudiante de Ingeniería"],
    typeSpeed: 70,
    backSpeed: 45,
    backDelay: 1400,
    loop: true
  });

  // Inicializar partículas (tsParticles)
  if (typeof tsParticles !== 'undefined') {
    tsParticles.load("particles", {
      fullScreen: { enable: false },
      particles: {
        number: { value: 50 },
        color: { value: "#00eaff" },
        shape: { type: "circle" },
        opacity: { value: 0.12, random: true },
        size: { value: { min: 1, max: 3 } },
        move: { enable: true, speed: 0.8, outModes: "bounce" },
        links: { enable: true, distance: 120, color: "#00bfff", opacity: 0.06, width: 1 }
      },
      background: { color: "transparent" }
    });
  }

  // FUNCIÓN PARA MOSTRAR CONTENIDO (Failsafe)
  const showContent = () => {
    if (intro) {
      intro.style.opacity = "0";
      setTimeout(() => {
        intro.style.display = "none";
        if (main) {
          main.classList.remove("hidden");
          main.style.opacity = "1";
          
          // Animaciones GSAP
          if (typeof gsap !== 'undefined') {
            gsap.from(".name", { y: 20, opacity: 0, duration: 0.8, ease: "power4.out" });
            gsap.from(".role", { y: 20, opacity: 0, duration: 0.8, delay: 0.1, ease: "power4.out" });
          }
        }
      }, 400);
    }
  };

  // Forzar 1 segundo de carga
  setTimeout(showContent, 1000);

  // Inicializar AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 900, once: false });
  }

  // Hover glow en badges
  document.querySelectorAll(".badge").forEach(b => {
    b.addEventListener("mouseenter", () => b.style.transform = "translateY(-4px)");
    b.addEventListener("mouseleave", () => b.style.transform = "translateY(0)");
  });
});
