var express = require("express");
var app = express();

app.get("/", function (requets, response) {
	response.send("Hello from CloudRun!")
})

app.listen(8080, () => console.log("Server running on port 8080"));
