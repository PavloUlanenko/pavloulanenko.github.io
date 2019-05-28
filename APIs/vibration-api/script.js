window.addEventListener("load", function() {
	(function() {
		// let vibrateObj = {
		// 	oneSec = 
		// };
		// function vibrate(time=0) {
		// 	navigator.vibrate(time);
		// }
		let form = document.querySelector("form");
		let timer;
		form.addEventListener("click", function(e) {
			e.preventDefault();
			let result = e.target.dataset.pattern.split(",")
			for(let i=0; i<result.length;i++) {
				result[i] = +result[i];
			}
			if(e.target.classList.contains("perpetually")) {
				timer = setInterval(function() {
					navigator.vibrate(result);
				}, 900);
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