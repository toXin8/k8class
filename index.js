const express = require("express")
const os = require("os")


//create an express server app
const server = express()

//define our port 
const PORT = 4343

//define the routes
server.get("/", (request, response) => {

    const hostname = os.hostname()

    console.log(`Server is running inside: ${hostname}`)

    response.send(`WELCOME TO: ${hostname}`)

})


//listening
server.listen(PORT, () => console.log(`Server is running on ${PORT}`));