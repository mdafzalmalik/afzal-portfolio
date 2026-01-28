const intro = document.querySelector(".intro");
const portfolio = document.querySelector(".portfolio");

/* fade out intro */
setTimeout(() => {
  intro.style.opacity = "0";
}, 7200);

/* fade in portfolio slightly after intro starts fading */
setTimeout(() => {
  portfolio.style.opacity = "1";
}, 7600);

/* remove intro completely */
setTimeout(() => {
  intro.style.display = "none";
  document.body.style.overflow = "auto";
}, 9000);
