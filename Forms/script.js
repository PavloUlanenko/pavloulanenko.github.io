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

	//FORM5
	(function(){
		let form = document.querySelector(".form5-wrap .main-block");
		let input = form.querySelector("input[type='email']");
		let showPassword = document.querySelector('.show-password');

		input.addEventListener('change', validate);
		showPassword.addEventListener('click', function(e) {
			e.preventDefault();
			let password = document.getElementById('password');
			if(password.type === 'password') {
				password.setAttribute('type', 'text');
				this.innerText = 'hide';
				return;
			}
			password.setAttribute('type', 'password');
			this.innerText = 'show';
		});

		function validate() {
			if(this.value) {
				this.classList.add('-filled');
			}
			if(!this.value.match('@') && !this.parentElement.classList.contains('-not-valid')) {
				this.parentElement.classList.add('-not-valid');
				let elem = document.createElement('span');
				elem.innerText = 'Please enter a valid email address.';
				elem.classList.add('error-message');
				this.parentElement.insertAdjacentElement('afterend', elem);
				return;
			}
			this.parentElement.classList.remove('-not-valid');
			document.querySelector('.error-message').remove();
		};
	})();

	//FORM6
  (function() {
    let form = document.forms.submitQuestion;
    
    form.addEventListener('focus', movePlaceholder, true);//because onfocus does not work with bubbling phase and I wanna use delegating
    form.addEventListener('blur', checkChanges, true);//onblur doesn't work with bubbling as well
    form.addEventListener('submit', submitForm);
    
    function submitForm(e) {
      e.preventDefault();
      console.log(e);
    }
    function movePlaceholder(e) {
      if(!e.target.parentElement.classList.contains('input-box')) return;
      e.target.parentElement.classList.add('-focused');
    }
    function checkChanges(e) {
      if(!e.target.value) e.target.parentElement.classList.remove('-focused');
    }
  })();
});