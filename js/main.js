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

/* smooth scroll for navigation links */
const navLinks = document.querySelectorAll('.nav-icons a');
navLinks.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      const navbarHeight = document.querySelector('.nav-bar').offsetHeight;
      const targetPosition = targetSection.offsetTop;

      document.querySelector('.main-content').scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

/* Active link highlighting on scroll */
const sections = document.querySelectorAll('section');
const mainContent = document.querySelector('.main-content');

mainContent.addEventListener('scroll', () => {
  let current = '';
  const navbarHeight = document.querySelector('.nav-bar').offsetHeight;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (mainContent.scrollTop >= (sectionTop - navbarHeight - 100)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) {
      a.classList.add('active');
    }
  });
});
