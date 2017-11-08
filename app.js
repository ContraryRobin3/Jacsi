var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home.ejs");
    
});

app.get("/progress", function(req, res){
    res.render("progress.ejs");
    
});

app.get("/budget", function(req, res){
    res.render("budget.ejs");
    
});

app.get("/plan", function(req, res){
    res.render("design.ejs");
    
});

app.get("/about", function(req, res){
    res.render("about.ejs");
    
});

app.get("/minutes", function(req, res){
    res.render("minutes.ejs");
    
});

app.get("*", function(req, res){
   res.send("Sorry this Page is not avaliable in dimension C-137");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started")
});