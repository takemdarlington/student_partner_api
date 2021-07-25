const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const bluebird = require('bluebird')

const config = require('./config')
//const routes = require('./routes')

import routes from './routes';



const app = express()

mongoose.Promise = bluebird
mongoose.connect(config.mongo.url, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// app.use(express.json())
app.use(morgan('tiny'))

app.use('/', routes)

app.listen(config.server.port, () => {
  console.log(`Magic happens on port ${config.server.port}`)
})

module.exports = app
