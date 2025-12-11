/* Intro sequence: flor -> ocultar intro -> mostrar main */
document.addEventListener("DOMContentLoaded", () => {
  // Typed.js para el rol
  const typed = new Typed(".typing", {
    strings: ["Desarrollador Web", "Frontend", "Automatizador Python", "Estudiante de Ingeniería"],
    typeSpeed: 70,
    backSpeed: 45,
    backDelay: 1400,
    loop: true
  });

  // Inicializar partículas (tsParticles)
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

  // Intro timing reducido de 2800 ms → 1400 ms
  const intro = document.getElementById("intro");
  const main = document.getElementById("main-content");

  setTimeout(() => {
    intro.style.opacity = "0";
    setTimeout(() => {
      intro.style.display = "none";
      main.classList.remove("hidden");
      main.style.opacity = "1";
      main.style.transform = "translateY(0)";

      // Animaciones GSAP
      gsap.from(".name", { y: 8, opacity: 0, duration: 0.9, ease: "power3.out" });
      gsap.from(".role", { y: 8, opacity: 0, duration: 1, delay: 0.1, ease: "power3.out" });
      gsap.from(".proj-card", { y: 28, opacity: 0, duration: 0.9, stagger: 0.15, ease: "power3.out" });

    }, 500);
  }, 1400); // <--- reducido aquí

  // Inicializar AOS
  AOS.init({ duration: 900, once: false });

  // Hover glow en badges
  document.querySelectorAll(".badge").forEach(b => {
    b.addEventListener("mouseenter", () => b.style.transform = "translateY(-4px)");
    b.addEventListener("mouseleave", () => b.style.transform = "translateY(0)");
  });
});
