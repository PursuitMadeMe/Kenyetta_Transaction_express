// set dependancies 
const app = require ("./app.js")

// allows access to .env file
require("dotenv").config();

// attach server to .env PORT
const PORT = process.env.PORT

// PORT TEST
app.listen(PORT, () => {
    console.log(`app live on port ${PORT}`)
})