const express = require('express')
const path = require('path')


const app = express()
const port = 6969

//config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//khai bao route
app.get('/', (req, res) => {
  res.send('Hello World! by Duy')
})

app.get('/xyz', (req, res) => {
  res.send('Check xyz')
})

app.get('/test', (req, res) => {
  // res.send('<h1> Add h1 tag </h1>')
  res.render('sample.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
