window.addEventListener('load', function() {
  (function() {
   
    function zoom() {
      let img, lens, result, ratioX, ratioY;
      img = document.querySelector('.img-container > img');
      result = document.querySelector('.zoom-result');
      lens = document.querySelector('.lens');
      ratioX = result.offsetWidth / lens.offsetWidth;
      ratioY = result.offsetHeight / lens.offsetHeight;

      result.style.backgroundImage = `url(${img.src})`;
      result.style.backgroundSize = `${img.offsetWidth * ratioX}px ${img.offsetHeight * ratioY}px`;
      
      lens.addEventListener('mousemove', moveLens);
      img.addEventListener('mousemove', moveLens);
      
      function moveLens(e) {
        e.preventDefault();
        let position = getCursorPosition(e);
        let lensPositionX = position.x - lens.offsetWidth / 2;
        let lensPositionY = position.y - lens.offsetHeight / 2;
        // console.log(lensPositionX);
        if (lensPositionX > img.offsetWidth - lens.offsetWidth) {lensPositionX = img.offsetWidth - lens.offsetWidth;}
        if(lensPositionX < 0) {lensPositionX = 0;}
        if (lensPositionY > img.offsetHeight - lens.offsetHeight) {lensPositionY = img.offsetHeight - lens.offsetHeight;}
        if(lensPositionY < 0) {lensPositionY = 0;}
        console.log(lensPositionX);
        lens.style.left = lensPositionX + lens.offsetWidth / 2 + 'px';
        lens.style.top = lensPositionY + lens.offsetHeight / 2 + 'px';
        result.style.backgroundPosition = `-${(lensPositionX) * ratioX}px -${(lensPositionY) * ratioY}px`;
      }
      function getCursorPosition(e) {
        let a = img.getBoundingClientRect();
        let x = e.pageX - a.left - window.pageXOffset;
        let y = e.pageY - a.top - window.pageYOffset;
        return {x: x, y: y};
      }
    }
    zoom();
  })();
});