var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const swaggerUI = require('swagger-ui-dist')

var indexRouter = require('./routes/index')
var apiRouter = require('./routes/users')

var app = express()
var port = 8000

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/api/v1', apiRouter)

//Deliver the swagger-ui relevant JS libs
app.use('/swagger-ui/', express.static(swaggerUI.getAbsoluteFSPath()))

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
})
module.exports = app
