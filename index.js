var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.get("/grocery", (req, res, next) => {
    
    // res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.post("/grocery", (req, res, next) => {
    res.json(req.body);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});