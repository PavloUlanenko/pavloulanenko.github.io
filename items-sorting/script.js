window.addEventListener("load", function() {
 (function() {
   let prices = [200, 120, 100, 56, 76, 339, 48, 5550, 558, 12];
   let sortButton = document.querySelector(".sort-menu");
   let products = document.querySelector(".products-wrap");
   for(let i=0; i<products.children.length; i++) {
      products.children[i].setAttribute("data-price", prices[i]);
      products.children[i].innerHTML += "---" + prices[i];
   }
   sortButton.addEventListener("click", function(e) {
      if(e.target.classList.contains("ascending")) {
        sort("asc");
      }else if(e.target.classList.contains("descending")) {
        sort("desc");
      }
   });
   function sort(arg) {
     for(let i=0; i<products.children.length; i++) {
        for(let j=i; j<products.children.length; j++) {
          if(arg === "asc") {
            if(+products.children[i].dataset.price > +products.children[j].dataset.price) {
              let replacedElement = products.replaceChild(products.children[j], products.children[i]);
              insertElement(replacedElement, products.children[i]);
            }
          }else if(arg === "desc") {
            if(+products.children[i].dataset.price < +products.children[j].dataset.price) {
              let replacedElement = products.replaceChild(products.children[j], products.children[i]);
              insertElement(replacedElement, products.children[i]);
            }
          }
        }
     }
   }
   function insertElement(element, afterWhat) {
      afterWhat.parentNode.insertBefore(element, afterWhat.nextSibling);
   }
 }());
});