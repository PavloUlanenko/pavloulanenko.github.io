window.addEventListener("load", function() {
  (function() {
    let chess = [];
    let elemContainer = document.createElement("ul");
 let board = document.querySelector(".board");
    let counter = 0;
    for(let i=0;i<8;i++) {
      chess.push([]);
      for(let j=0;j<8;j++) {
        chess[i].push(0);
        let elem = document.createElement("li");
        if(counter%2 === 0) {
          elem.classList.add("black");
        }
        elemContainer.appendChild(elem);
        counter++;
      }
      counter++;
    }
    console.log(elemContainer.children.length);
    board.appendChild(elemContainer);
  })();
});