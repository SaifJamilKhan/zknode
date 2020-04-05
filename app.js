var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});


var quiz ={
    questions:[
        {
            message:"How old is the earth?",
            answers:["1 year", "2 year", "4.54 billion years", "4 year"],
            correctAnswer:"4.54 billion years"
        }
    ],

};

app.get("/quiz", (req, res, next) => {
    res.json(quiz);
});
