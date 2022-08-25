// express dependancies 
const express = require("express");
const app = express();

// cors middleware to allow talking between PORT 3333 and 3000
const cors = require("cors");
app.use(cors())

// middleware to change JSON to javascript
app.use(express.json())

// variable to access transactions data 
const transactionsController = require("./controllers/transactionsController.js")

// variable to access transactions data from models in transactionsController
app.use("/transactions", transactionsController);


// middleware message that will run in terminal
app.use((req,res, next) => {
    console.log("8.4 Kenyetta Budgeting App")
    next();
})
 
// URL Welcome Home "/" page message on localhost:3333
app.get("/", (req, response) => {
    response.send("8.4 Kenyetta Budgeting App");
  });

  
  

// ERROR - If you can't access the data respond with 404 message page 
app.use("*", (req, res) => {
    res.status(404).send("Sorry No Transactions");
  });


 // MUST EXPORT
 module.exports = app; 
