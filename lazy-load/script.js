window.onload = function() {
  let images = document.querySelectorAll(".lazy");
  function lazyLoad() {
    let counter = images.length;
    let scrolled = window.pageYOffset;
    images.forEach(function(currentValue) {
      if(currentValue.offsetTop < window.innerHeight + scrolled) {
        currentValue.src = currentValue.dataset.src;
        currentValue.classList.remove("lazy");
        counter--;
      }
      if(counter===0) {
        document.removeEventListener("scroll", lazyLoad);
      }
    });
  }
  document.addEventListener("scroll", lazyLoad);
}