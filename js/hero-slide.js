document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero .slide");
  const dots = document.querySelectorAll(".slide-dots .dot");
  let current = 0;

  // initialize first slide
  slides[0].classList.add("active");
  dots[0].classList.add("active");

  // wire up dots
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      // hide old
      slides[current].classList.remove("active");
      dots[current].classList.remove("active");

      // show new
      slides[i].classList.add("active");
      dot.classList.add("active");

      current = i;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 } // fire when 15% of the element is visible
  );

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = Array.from(
    document.querySelectorAll(".focus-slides .focus-slide")
  );
  let current = 0;

  function updateClasses() {
    slides.forEach((s) =>
      s.classList.remove("prev2", "prev", "active", "next", "next2")
    );

    const len = slides.length;
    const prev = (current - 1 + len) % len;
    const prev2 = (current - 2 + len) % len;
    const next = (current + 1) % len;
    const next2 = (current + 2) % len;

    slides[prev2].classList.add("prev2");
    slides[prev].classList.add("prev");
    slides[current].classList.add("active");
    slides[next].classList.add("next");
    slides[next2].classList.add("next2");
  }

  updateClasses();
  setInterval(() => {
    current = (current + 1) % slides.length;
    updateClasses();
  }, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navbar");
  const btn = nav.querySelector(".hamburger");

  btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen);
  });
});
