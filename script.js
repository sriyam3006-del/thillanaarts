const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const form = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 12);
}

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  header.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("open");
    header.classList.remove("menu-open");
    menuToggle.setAttribute("aria-label", "Open navigation");
  }
});

if (form && formNote) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    formNote.textContent = "Inquiry noted. Connect this form to Formspree, Web3Forms, or your backend when deploying.";
    form.reset();
  });
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
