
const express = require('express'); // dont forget to install express everytime you run server. 'post' is for sending information
const bodyParser = require("body-parser");
const app = express(); // is what you named the action 
    app.get("/bmicalculator", function(request, response) {//callback function thats going to send them a file
        response.sendFile(__dirname + "/bmiCalculator.html");  // '__dirname has to do with directory paths
        });
app.post("/bmicalculator", function(request, response){ // being sent back to client browswer but also client inputting data
    var height = parseFloat(request.body.height);// passing http request back to client browswer. object body
    var weight = parseFloat(request.body.weight);
var bmi = weight / (height * height);
    response.send("Your BMI is " + bmi); // sending back a response. appending bmi var here
});
app.use(bodyParser.urlencoded({extended: true}));//using body-parser to retrieve data from html. 'extended' is an option for nested objects but we wont be using much 
  app.get("/", function(request, response) {
    response.sendFile(__dirname + "/index.html");  // '__dirname has to do with directory paths
    });
app.post("/", function(request, response){ // being sent back to client browswer
    var num1 = Number(request.body.num1);// passing http request back to client browswer. object body
    var num2 = Number(request.body.num2);
    var result = num1 + num2;
    response.send("your BMI results" + result); 
});
app.listen(3007, function(){ 
    console.log("port 3007");
    });

    
