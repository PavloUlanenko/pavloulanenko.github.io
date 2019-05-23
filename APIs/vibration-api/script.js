window.addEventListener("load", function() {
	(function() {
		// let vibrateObj = {
		// 	oneSec = 
		// };
		function vibrate(time=0) {
			navigator.vibrate(time);
		}
		let form = document.querySelector("form");
		form.addEventListener("click", function(e) {
			let result = e.target.dataset.pattern.split(",")
			for(let i=0; i<result.length;i++) {
				result[i] = +result[i];
			}
			navigator.vibrate(result);
			console.log(result);
			console.log(e.target);
		});
	})();
	navigator.vibrate(1000,2000,3000);
});