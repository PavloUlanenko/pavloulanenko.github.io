window.addEventListener('DOMContentLoaded', function() {
  (function() {
    let images = [
      'https://picsum.photos/id/237/200/200',
      'https://picsum.photos/id/257/200/200',
      'https://picsum.photos/id/337/200/200',
      'https://picsum.photos/id/297/200/200'
    ];
    let words = [
      'Exhaust Parts',
      'Fenders',
      'Hoods',
      'Trunks'
    ];
    let translations = [
      'Запчасти к выхлопным',
      'Боковые крылья',
      'Капоты',
      'Багажники'
    ];
    let usages = [
      'Lorem1',
      'Lorem2',
      'Lorem3',
      'Lorem4'
    ];
    let cards = document.getElementsByTagName('li');
    let arrows = document.querySelector('.controls');
  arrows.addEventListener('click', moveCards);
    setContentIntoCards();
    
    function setContentIntoCards() {
      let imgContainers = getItem('.img-container');
      let wordsContainers = getItem('.word');
      let translationsContainers = getItem('.translation');
      let usagesContainers = getItem('.usage');
      
      imgContainers.forEach((elem, index) => elem.firstElementChild.src = images[index]);
      wordsContainers.forEach((elem, index) => elem.innerHTML = words[index]);
      translationsContainers.forEach((elem, index) => elem.innerHTML = translations[index]);
      usagesContainers.forEach((elem, index) => elem.innerHTML = usages[index]);
      
      function getItem(selector) {
        return document.querySelectorAll(selector);
      }
    }
    function moveCards(e) {
      if(e.target.matches('.-left')) move(true);
      else if(e.target.matches('.-right')) move();
      function move(direction) {
        if(direction) {
          cards[0].parentElement.appendChild(cards[0]);
          animateStack(true);
          return;
        }
        cards[0].parentElement.insertBefore(cards[cards.length-1], cards[0]);
        animateStack();
      }
    }
    function animateStack(direction) {
      let arrowsInn = document.querySelectorAll('.arrow');
      let currentElement = direction ? cards[0].parentElement.lastElementChild : cards[0].parentElement.firstElementChild;
      console.log(currentElement);
      currentElement.classList.add('-active');
    }
    document.querySelector('.cards-container').addEventListener('animationend', function(e) {
      console.log(e);
      e.target.classList.remove('-active');
    });
  })();                      
});