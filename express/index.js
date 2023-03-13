if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const serverless = require("serverless-http");
const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000

const routes = require('./routes');
const errorHandler = require("./helpers/errorHandler");

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(routes)
app.use(errorHandler)

if (process.env.NODE_ENV !== 'production'){
    app.listen(port, () => {
        console.log(`Server Standby on http://localhost:${port}`);
    })
}

module.exports.handler = serverless(app);