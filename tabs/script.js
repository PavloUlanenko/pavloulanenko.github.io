window.addEventListener("click", function() {
  (function() {
    let tabs = document.querySelectorAll(".tab-title");
    tabs.forEach(elem => {
      elem.addEventListener("click", toggleTabs);
    });
    function getSiblings(elem) {
      let siblings = [];
      let sibling = elem.parentElement.firstElementChild;
      while(sibling) {
        if(sibling !== elem && sibling.tagName !== "DD") {
          siblings.push(sibling);
        }
        sibling = sibling.nextElementSibling;
      }
      return siblings;
    }
    function toggleTabs(e) {
      e.stopPropagation();
      let siblings = getSiblings(this);
      console.log(siblings);
      siblings.forEach(elem => {
        elem.classList.remove("-active");
      });
      this.classList.toggle("-active");
    }
  })();
});