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

const courseTitle = document.querySelector(".course-title-main");
const courseBalloon = document.querySelector(".course-floating-balloon");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (courseTitle && courseBalloon && !prefersReducedMotion) {
  let hasBalloonStarted = false;

  const startBalloonAnimation = () => {
    if (hasBalloonStarted) return;

    hasBalloonStarted = true;
    courseBalloon.classList.add("is-rising");
    courseBalloon.addEventListener("animationend", () => courseBalloon.remove(), {
      once: true,
    });
  };

  if ("IntersectionObserver" in window) {
    const balloonObserver = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;

        balloonObserver.disconnect();
        startBalloonAnimation();
      },
      {
        rootMargin: "0px 0px -88% 0px",
        threshold: 0,
      },
    );

    balloonObserver.observe(courseTitle);
  } else {
    const checkCourseTitlePosition = () => {
      const titlePosition = courseTitle.getBoundingClientRect();
      const topTriggerZone = window.innerHeight * 0.12;

      if (titlePosition.top > topTriggerZone || titlePosition.bottom <= 0) return;

      window.removeEventListener("scroll", checkCourseTitlePosition);
      window.removeEventListener("resize", checkCourseTitlePosition);
      startBalloonAnimation();
    };

    window.addEventListener("scroll", checkCourseTitlePosition, { passive: true });
    window.addEventListener("resize", checkCourseTitlePosition);
    checkCourseTitlePosition();
  }
}
