window.addEventListener("load", function() {
  (function() {
    let thumbnails = document.querySelectorAll(".thumbnails > li > a");
    let mainImages = document.querySelectorAll(".main-image > a");
    thumbnails.forEach(elem => {
      elem.addEventListener("click", function(e) {
        e.preventDefault();
        let index = Array.prototype.indexOf.call(thumbnails, elem);
        console.log(index);
        mainImages.forEach(elem => {
          elem.classList.remove("-active");
          mainImages[index].classList.add("-active");
        });
      });
    });
  })();
});