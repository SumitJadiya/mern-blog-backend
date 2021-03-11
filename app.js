const express = require("express")
const mongoose = require("mongoose")

const app = express()
const cors = require("cors")

app.use(cors())

// Port
const port = 3000;

app.get("/", ()=> {
    console.log("hello")
})

// Server
app.listen(port, () => {
    console.log(`app is running at ${port}`)
});