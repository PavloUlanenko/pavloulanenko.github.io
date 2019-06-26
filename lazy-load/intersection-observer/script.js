window.addEventListener("load", function() {
  (function() {
    let images = document.querySelectorAll(".image-gallery img");
    if("IntersectionObserver" in window) {
      let observer = new IntersectionObserver(lazyLoad);
      function lazyLoad(images, observer) {
        images.forEach(elem => {
          if(elem.isIntersecting) {
            elem.target.src = elem.target.getAttribute("data-src");
          }
        });
      }
      images.forEach(elem => observer.observe(elem));
    }
  })();
});