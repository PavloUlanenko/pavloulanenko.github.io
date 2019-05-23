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
			navigator.vibrate(e.target.dataset.pattern);
		});
	})();
});