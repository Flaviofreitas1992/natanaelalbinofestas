const year = document.querySelector("[data-year]");

if (year) year.textContent = String(new Date().getFullYear());

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 },
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const courseSection = document.querySelector(".course");
const courseBalloon = document.querySelector(".course-floating-balloon");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (courseSection && courseBalloon && !prefersReducedMotion) {
  const startBalloonAnimation = () => {
    courseBalloon.classList.add("is-rising");
    courseBalloon.addEventListener("animationend", () => courseBalloon.remove(), {
      once: true,
    });
  };

  if ("IntersectionObserver" in window) {
    const balloonObserver = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;

        startBalloonAnimation();
        balloonObserver.disconnect();
      },
      { threshold: 0.12 },
    );

    balloonObserver.observe(courseSection);
  } else {
    startBalloonAnimation();
  }
}
