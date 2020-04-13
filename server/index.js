const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const { database } = require('./database/index.js')

const app = express()
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '../public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

database.sync().then(() => app.listen(3000, () => console.log('Server is listening on Port 3000')))
