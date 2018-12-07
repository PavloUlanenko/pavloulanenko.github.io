
		  let canvas = document.getElementById("canvas");
		  let ctx = canvas.getContext("2d");//3d is not supportable for now
		  canvas.height = window.innerHeight;
		  canvas.width = window.innerWidth;
		  let english = "1001010101110101010101010010101000101011101111010101010110101010101010101110000101";
		  english = english.split("");
		  let fontSize = 15;
		  let columns = canvas.width/fontSize;
		  let drops = [];
		  for(let i = 0; i< columns; i++){
			drops[i] = 1;////an array of drops - one per column
		  }
		  
			var draw = function(){
				ctx.fillStyle = "rgba(0,0,0,0.05)";//creating a trace of dropping chars (should be opacity -- rgba of #000)
				ctx.fillRect(0, 0, canvas.width, canvas.height);//coordinates X and Y of top left angle of the rectangle. If not created there won't be refreshment for the dropping text
				ctx.fillStyle = "#00FF41";//color of letters for ctx.fillText
				ctx.font = fontSize + "px arial";
				for(let j = 0; j < drops.length; j++){
					let text = english[Math.floor(Math.random()*english.length)];
					ctx.fillText(text, j*fontSize, drops[j]*fontSize);//j*fontSize deploys it in columnns
					if(drops[j]*fontSize > canvas.height && Math.random() > .975){
						drops[j] = 0;
					}
					drops[j]++;
					<!-- console.log(drops); -->
				}
			}
			let timer = setInterval(draw, 83);
			var stopped = document.getElementById("stop");
			stopped.onclick = function(){
				clearInterval(timer);
			};
			//.975 regulates how distant dropping lines will be from each other. 0 - the dropping sting is even
			//setInterval regulates the speed
			<!-- $(function(){ -->
				<!-- $(".stop").on("click", function(){ -->
					<!-- removeInterval(timer); -->
				<!-- }); -->
			<!-- }); -->

	