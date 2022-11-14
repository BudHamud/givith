const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
const PORT = 8080

app.get('/api/mensajes', (req, res) => {
    console.log('HTTP GET')
    res.json({msg: 'hola mundo'})
})

app.get('/api/mensajes-query-params', (req, res) => {
  console.log('GET');
  if (Object.entries(req.query).length > 0) {
    res.json ({
      res: 'get ok',
      query: req.query
    })
  } else {
    res.json({
      result: 'no se envió'
    })
  }
})

app.get('/api/mensajes/:id', (req, res) => {
  res.json({
    result: 'recurso',
    id: req.params.id
  })
})

app.post('/api/mensajes/', (req, res) => {
  res.json({msg: 'hola mundo'})
})

app.listen(PORT, () => {
    console.log('Server listo');
})