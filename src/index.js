const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,function(){
console.log("Express app is running on port ",3000)
})

app.get('/hitme',function(req,res){
console.log("Hello World!");
})