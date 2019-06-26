"use strict";
window.addEventListener("load", function() {
	(function() {
		// Calculates sum of two numbers, checks if they are numeric
		function sum() {
			let a = +prompt("Enter the first number", "1");
			let b = +prompt("Enter the second number", "2");
			function isNumeric(val) {
				return !isNaN(parseFloat(val)) && isFinite(val);
			}
			a = isNumeric(a) ? a : 0;
			b = isNumeric(b) ? b : 0;
			return a + b;
		};
	})();
});