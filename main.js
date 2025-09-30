document.addEventListener("DOMContentLoaded", () => {
  // Форма
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Спасибо! Уже проверяю ваш запрос и скоро отвечу ⚡");
      form.reset();
    });
  }

  // Автообновление года в футере
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Плавное появление секций
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  sections.forEach(s => observer.observe(s));

  // Кастомный курсор
  const cursor = document.getElementById("cursor-follower");
  if (cursor) {
    document.addEventListener("mousemove", e => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    document.querySelectorAll("a, button, .portfolio-item img")
    .forEach(el => {
      el.addEventListener("mouseenter", () => cursor.classList.add("active"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("active"));
    });
  }
});
