const intro = document.querySelector(".intro");
const portfolio = document.querySelector(".portfolio");

/* Start fading intro */
setTimeout(() => {
  intro.style.opacity = "0";
  portfolio.style.opacity = "1";
}, 7600);

/* Remove intro after fade completes */
setTimeout(() => {
  intro.style.display = "none";
  document.body.style.overflow = "auto";
}, 8600);
