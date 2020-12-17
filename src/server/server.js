const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
// import routes
const blogRoutes = require('./routes/blog')

// invoke the app
const app = express()

// connect db
mongoose.connect(process.env.DATABASE_LOCAL, {useNewUrlParser: true, useCreateIndex: true,
  useFindAndModify: false, useUnifiedTopology: true}).then(() => console.log('\nDB connected...\n'));

// middleware are applied using the use method
app.use(morgan('dev')) //dev designates development mode
app.use(bodyParser.json())
app.use(cookieParser())
//cors for purpose of avoiding cors errors
if(process.env.NODE_ENV == 'development') {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}
// routes middleware
app.use('/api', blogRoutes);

// port
const port = process.env.PORT || 8000 //access port var from env file or use 8000 as default
app.listen(port, () => { //run our app
    console.log(`Server is running on port ${port}`); //template string allows embed variable in backticks
})
