window.onload = function(){
	let targetLink = "https://spreadsheets.google.com/feeds/list/1A4JsYvV2T6uhpVrFKs6gSY2_CXISZEXT8qLi_FrEOMc/od6/public/values?alt=json";
	let getJSON = function(url, callback){
	  let xhr = new XMLHttpRequest();//create a new object HttpRequest
	  xhr.open("GET", url, true);
	  xhr.responseType = "json"; //какой тип ответа от сервера я жду
	  xhr.onload = function(){
		let status = xhr.status;
		if(status===200){
	  		callback(null, xhr.response);
		}else{
	  		callback(status, xhr.response);//передаём параметры
		}
	  }
	  xhr.send();
	}
	let processJSON = function(status, meter){//вот они наши параметры
		let someData = document.createElement("p");
		let meterData = meter["feed"]["entry"]["0"]["gsx$datakwh"]["$t"];
		let meterNumber = meter["feed"]["entry"]["0"]["gsx$emeternumber"]["$t"];
		someData.innerHTML = "Your data up to last month is: " + meterData + " KW/H " + "<br/>" + "Your electricity meter number is: " +meterNumber;
		document.querySelector(".wrapper").appendChild(someData);
		console.log(meter);//вот он наш JSON с данными
	}
	getJSON(targetLink, processJSON);
}