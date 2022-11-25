const express = require('express')
const Contenedor = require('./container/Contenedor')

const router = express.Router()
const contenedor = new Contenedor()

const app = express()

router.get('/', (_req, res) => {
    const productos = contenedor.getAll()
    res.send(productos)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    const producto = contenedor.getById(Number(id))
    res.send(producto)
})

const getData = () => {
    alert('a')
}

router.post('/', (req, res) => {
    const obj = document.getElementById('nombre')
    const nuevoObj = contenedor.save(obj)
    res.send(nuevoObj)
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const updProducto = contenedor.updById(Number(id))
    res.send(updProducto)
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    const objBorrado = contenedor.deleteById(id)
    res.send(objBorrado)
})

app.use(express.json())
app.use('/api/productos', router)

app.listen(8080, () => {
    console.log('200 OK');
})