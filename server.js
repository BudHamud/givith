const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IO } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IO(httpServer)

app.use(express.static('./public'))

const PORT = 8080

const msg = [
    { fecha: '00:53:21' , autor: 'Brodi', texto: 'Cómo viene eso?' },
    { fecha: '00:53:49' , autor: 'Lobby', texto: 'Bien' },
    { fecha: '00:59:02' , autor: 'Brodi', texto: 'Que bueno che' }
]

const prod = [
    { producto: 'Banana', precio: 120 },
    { producto: 'Durazno', precio: 80 }
]

io.on('connection', socket => {
    console.log('Nuevo usuario conectado');

    socket.emit('mensaje', msg)

    socket.on('nuevo-mensaje', data => {
        msg.push(data)

        io.sockets.emit('mensaje', msg)
    })
})

io.on('connection', socket => {
    console.log('Nuevo producto');

    socket.emit('producto', prod)

    socket.on('nuevo-producto', data => {
        prod.push(data)

        io.sockets.emit('producto', prod)
    })
    console.log(prod);
})

httpServer.listen(PORT, () => {
    console.log(`200 OK`);
}) 