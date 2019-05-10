window.addEventListener("load", function() {
	//FORM4
	(function() {
	  let counter = 0;
	  let scrollFormPages = (direction) => {
	    if(document.querySelectorAll(".progressbar li")[counter+1]){
	    if("forward"){
	      document.querySelectorAll(".progressbar li")[counter+1].classList.add("-active");
	      document.querySelectorAll("fieldset")[counter].style.display = "none";
	      document.querySelectorAll("fieldset")[counter+1].style.display = "block";
	      prev.style.display = "inline-block";
	      counter++;
	      console.log(counter);
	    }
	    }else{
	      document.querySelectorAll(".progressbar li")[counter].classList.remove("-active");
	      counter--;
	      console.log(counter);
	    }
	  }
	  let next = document.querySelector(".next-page");
	  let prev = document.querySelector(".prev-page");
	  next.addEventListener("click", function() {
	    scrollFormPages("forward");
	  });
	  prev.addEventListener("click", scrollFormPages);
	})();
});