//Load Data
var  friends = require("../data/friends");

//Routing

module.exports = function(app){
    //API Get
    app.get("/api/friends", function(req,res){
        console.log(friends);
        return res.json(friends); 
    });

    //API Post Sumbits form

    app.post("/api/friends", function(req,res){
        friends.push(req.body);  
    })

}