window.addEventListener("load", function() {
  (function() {
    const panels = document.querySelectorAll(".panel");
    function togglePanel() {
      this.classList.toggle("-open");
    }
    panels.forEach((currentValue) => {
      currentValue.addEventListener("click", togglePanel);
      currentValue.addEventListener("transitionend", function(e) {
        //the property name is "flex" in Safari and "flex-grow" in the rest of them
        if(e.propertyName.includes("flex")){
          this.classList.toggle("-active");
        }
      });
    });
  })();
});