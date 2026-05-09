const header = document.querySelector("[data-header]");
const navLinks = Array.from(document.querySelectorAll(".nav a"));
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 18);
}

function updateActiveNav() {
  const current = sections
    .filter((section) => section.getBoundingClientRect().top < 160)
    .at(-1);

  navLinks.forEach((link) => {
    const isActive = current && link.getAttribute("href") === `#${current.id}`;
    link.classList.toggle("is-active", Boolean(isActive));
  });
}

window.addEventListener("scroll", () => {
  updateHeader();
  updateActiveNav();
});

updateHeader();
updateActiveNav();
