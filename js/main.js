const intro = document.querySelector(".intro");
const portfolio = document.querySelector(".portfolio");

/* After intro finishes completely */
setTimeout(() => {
  intro.style.opacity = "0";
}, 9000);   // adjust if your intro timing changes

/* Hide intro and show portfolio */
setTimeout(() => {
  intro.style.display = "none";
  portfolio.style.opacity = "1";
}, 10200);
