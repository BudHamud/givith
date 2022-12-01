const express = require('express')
const app = express()

const productos = []

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views')
app.set('view engine', 'pug')

const PORT = 8080

app.get('/', (req, res) => {
  res.render('Inicio', { productos })
})

app.post('/productos', (req, res) => {
  productos.push(req.body)
  res.redirect('/')
})

app.listen(PORT, () => {
  console.log('200 OK ' + PORT);
})