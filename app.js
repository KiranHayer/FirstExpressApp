var express = require("express");

var app = express();

// "/" => Hi there!
//route path and call back func
app.get("/", function(req, res){
	res.send("Hi, there!");
	});
//"/bye" => "Goodbye!"
app.get("/bye", function(req, res){
	res.send("Goodbye!!");
});
// "/dog" => "Woof!"
app.get("/dog", function(req, res){
	res.send("Woof!");
});

app.listen(3000, function(){
	console.log("Server has Started!!!");
});
