var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/", (req, res, next) => {
    res.json("Try the /quiz path");
});


var quiz ={
    questions:[
        {
            message:"How old is the earth?",
            answers:["1 year", "2 year", "4.54 billion years", "4 year"],
            correctAnswerIndex:3
        },
        {
            message:"What is Vik's favorite holiday?",
            answers:["Valentines Day", "April Fools", "St Patties Day", "Holidays are a waste of time and money"],
            correctAnswerIndex:4
        },
    ],

};

app.get("/quiz", (req, res, next) => {
    res.json(quiz);
});
