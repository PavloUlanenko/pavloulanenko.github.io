window.onload = function(){
  let envelope = document.querySelector(".envelope");
  let showLetter = function(e){
    e.stopPropagation();
  letter.classList.toggle("opened");
    // envelopeWrapper.removeEventListener("mousedown", rotateEnvelope, true);
  }
   envelope.addEventListener("dblclick", function() {
   showLetter();
     envelope.classList.toggle("-active");
 });
  function rotate(e){
          let x = e.clientX;
          let y = e.clientY;
          envelopeWrapper.style.transform = "rotate3d(1,0,0,"+x+"deg)"; 
  }
  let letter = document.querySelector(".letter");
  letter.addEventListener("dblclick", showLetter);
  let envelopeWrapper = document.querySelector(".envelope-wrap");
  envelopeWrapper.addEventListener("transitionend", function() {
    this.style.transform = "";
  });
  let showPhotos = function(arg) {
    let photos = document.querySelectorAll(".photo");
    if(arg) {
      photos.forEach(function(currentValue) {
        currentValue.classList.add("-active");
      });
      return;
    }
    photos.forEach(function(currentValue) {
        currentValue.classList.remove("-active");
    });
  }
  envelopeWrapper.addEventListener("mouseover", function() {
    showPhotos("show");
  });
  envelopeWrapper.addEventListener("mouseout", function() {
    showPhotos();
  });
  function rotateEnvelope(){
   document.addEventListener("mousemove", rotate, true);
  }
  envelopeWrapper.addEventListener("mousedown", rotateEnvelope);
  document.onmouseup = function(){
    document.removeEventListener("mousemove", rotate, true);
  }
  envelopeWrapper.addEventListener("dblclick", function(){
    document.querySelector(".close-label").classList.toggle("-active");
    document.querySelector(".envelope").classList.toggle("-active");
    envelopeWrapper.removeEventListener("mousedown", rotateEnvelope);
  });
}