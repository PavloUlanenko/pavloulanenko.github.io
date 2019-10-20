const http = require('http');
let server = http.createServer();
server.on('request', handler);//Событие request наступает при запросе на сервер
function handler(request, response) {//request и response - объекты, представляющие запрос и ответ

}
