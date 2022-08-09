const express = require("express");

// create a variable for the ROUTER that allows us to define our route - CREATES THE PATHS TO OUR DATA --------------------------------------------------
const transactions = express.Router();

// variable for transactions data in models folder
const transactionsData = require("../models/transactions.js");


// GET  set the path to the Index page on localhost:3333/transactions
transactions.get("/transactions");

// transactions.get("/", (req, res) => {
//   res.send(transactionsData);
// });

// GET - READ request to INDEX page respond with transaction data localhost:3333/transactions
// CONVERTING JSON TO JAVASCRIPT 
transactions.get("/", (req, res) => {
  res.json(transactionsData)
});

// GET - READ request to SHOW page respond with wild card from the user on localhost:3333/transactions/2
transactions.get("/:arrayIndex", (req, res) => {

  // variable for user wild cars = req.params
  const {arrayIndex} = req.params

  // if path to transactions data at wild card exist send that JSON converted data 
  if(transactionsData[arrayIndex]) {
    res.json(transactionsData[arrayIndex])
  }else{
  // if path to transactions data at wild card does not exist send error message
    res.status(404).send("NOT IN BUDGET")
  }
})

// POST - CREATE request to Create add new data to the end of the transactions data array localhost:3333/transactions
transactions.post("/", (req, res) =>  {

  // the POSTMAN data added to the body then pushed to the transactions array
  transactionsData.push(req.body);

// respond with new transactions data added the end of the transactions data array
  res.json(transactionsData[transactionsData.length -1])
})

// PUT - UPDATE 
// transactions router . UPDATE  - string , function (request and response)
transactions.put("/:arrayIndex", (req, res) => {

// change the string to a variable equal to request parameter(wild card)
  const {arrayIndex} = req.params

// go to the resourses list at wild card index request an update with new data (req.body from POSTMAN)
  transactionsData[arrayIndex] = req.body


  // respond to the user with OK return resources list with updates wild card data 
  res.status(200).json(transactionsData[arrayIndex])
})

// DELETE 
// http:localhost:3333/transactions/0 - arrayIndex is 0 
// transactions router .DELETE - string , function (request and response)
transactions.delete("/:arrayIndex", (req, res) => {

// change the string to a variable equal to request parameter(wild card)
const {arrayIndex} = req.params

// create a variable equal to resources . remove wild card index , just one file
  const deletedBudgets = transactionsData.splice(arrayIndex, 1)

  // respond to the user with OK and the resources list withough the wild card index
  res.status(200).json(deletedBudgets)
})



// MUST EXPORT
module.exports = transactions;