window.addEventListener("load", function() {
  //MENU1
  (function() {
    let submenuContainer = document.querySelectorAll(".has-submenu");
    submenuContainer.forEach((element) => {
      element.addEventListener("click", function(e) {   
        e.stopPropagation();
        element.classList.toggle("-active");
      });
    });
    document.addEventListener("click", function() {
      document.querySelectorAll(".submenu").forEach((element) => {
        element.parentElement.classList.remove("-active");
      });
    });
  })();

  //MENU3
  (function() {
    let menuButton = document.querySelector(".menu-switch");
    menuButton.addEventListener("click", toggleMenu);
    function toggleMenu() {
      this.classList.toggle("-active");
    }
  })();
});