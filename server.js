//Dependencies

var express = require("express");


//Express configuration
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("app/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Routes
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);


//Starts server
app.listen(PORT, function() {
    console.log("App is listening on http://localhost:" + PORT);
})
