var http = require("http");
var fs = require('fs');
var port = 3000;
var serverUrl = "localhost";

var server = http.createServer(function(req, res) {

  console.log("Request: " + req.url);

  if(req.url == "/") {
        fs.readFile("index.html", function(err, text){
          res.setHeader("Content-Type", "text/html");
          res.end(text);
        });
        return;
   }
   else if(req.url == "/favicon.ico"){
     res.end();
   }
});

console.log("Listening at " + serverUrl + ":" + port);
server.listen(port, serverUrl);

