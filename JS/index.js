const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});


const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faq => {
  faq.querySelector(".faq-question").addEventListener("click", () => {
    
    faq.classList.toggle("active");

    faqs.forEach(other => {
      if (other !== faq) other.classList.remove("active");
    });

  });
});
