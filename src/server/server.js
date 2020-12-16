const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

// invoke the app
const app = express()

// middleware are applied using the use method
app.use(morgan('dev')) //dev designates development mode
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

// routes
app.get('/api', (req, res) => { //app.get takes two params (endPoint, function we are using)
        res.json({time: Date().toString()}) //respond with time in json format for each request to endpoint
})

// port
const port = process.env.PORT || 8000 //access port var from env file or use 8000 as default
app.listen(port, () => { //run our app
    console.log(`Server is running on port ${port}`); //template string allows embed variable in backticks
})
