const express = require("express");
const cors = require("cors");
require('dotenv').config();
const router = require('./routes/index');

const app = express();

app.use(cors())
    .use(express.json())
    .use('/api', router)

const port = process.env.PORT;

const start = () => {
    try {
        app.listen(port, () => {
            console.log("Server is running on port " + port)
        }) 
    } catch (e) {
        console.log(e);
    }
}

start();