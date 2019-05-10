window.addEventListener("load", function() {
  //GLOWING TEXT1
  (function() {
    let letterContainer = document.createElement("div");
    let letter = document.createElement("span");
    let word = "Glowing";
    for(let i=0; i<word.length; i++) {
      letter.innerHTML = word[i];
      letterContainer.appendChild(letter.cloneNode(true));
    }
    document.querySelector(".glowing-text-1").appendChild(letterContainer);
  })();
});