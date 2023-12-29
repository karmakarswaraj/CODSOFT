document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  // Responsive navigation menu
  const menuIcon = document.querySelector(".menu-icon");
  const menuList = document.querySelector(".menu-list");

  if (menuIcon) {
    menuIcon.addEventListener("click", toggleMenu);
  }

  function smoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60, // Adjust as needed
        behavior: "smooth",
      });
    }
  }

  function toggleMenu() {
    menuList.classList.toggle("show-menu");
  }
});
