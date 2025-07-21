const express = require('express')
const app = express()
const port = 6969

//khai bao route
app.get('/', (req, res) => {
  res.send('Hello World! by Duy')
})

app.get('/xyz', (req, res) => {
  res.send('Check xyz')
})

app.get('/test', (req, res) => {
  res.send('<h1> Add h1 tag </h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
