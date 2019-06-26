window.addEventListener("load", function() {
	(function() {
		let form = document.querySelector("form");
		let  customDelayBtn = form.querySelector(".custom-patterned");
		let timer;
		function checkInputs() {
			form.querySelectorAll("input[type=number]").forEach(elem => {
				if(elem.value) customDelayBtn.dataset.patterned += elem.value + ", ";
			});
			return true;
		}
		form.addEventListener("click", function(e) {
			e.preventDefault();
			console.log(e);
			if(e.target.tagName !== "BUTTON") return;
			if(checkInputs()) customDelayBtn.style.pointerEvents = "auto";
			let result = e.target.dataset.pattern.split(",")
			for(let i=0; i<result.length; i++) {
				result[i] = +result[i];
			}
			if(e.target.classList.contains("perpetually")) {
				if(timer) return;
				timer = setInterval(function() {
					navigator.vibrate(result);
				}, 10000);
				return timer;
			}
			if(timer && e.target.classList.contains("stop")) {
				clearInterval(timer);
				navigator.vibrate(0);
				return;
			}
			navigator.vibrate(result);
		});
	})();
});