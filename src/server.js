const express = require('express')
const path = require('path')
require('dotenv').config()


const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

//config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//khai bao route
app.get('/', (req, res) => {
  res.send('Hello World! by Duy & nodemon')
})

app.get('/xyz', (req, res) => {
  res.send('Check xyz')
})

app.get('/test', (req, res) => {
  // res.send('<h1> Add h1 tag </h1>')
  res.render('sample.ejs')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
