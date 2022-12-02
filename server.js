const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IO } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IO(httpServer)

app.use(express.static('./public'))

const PORT = 8080

const msg = [
    { autor: 'Brodi', texto: 'Cómo viene eso?' },
    { autor: 'Lobby', texto: 'Bien' },
    { autor: 'Brodi', texto: 'Que bueno che' }
]

io.on('connection', socket => {
    console.log('Nuevo usuario conectado');

    socket.emit('mensaje', msg)

    socket.on('nuevo-mensaje', data => {
        msg.push(data)

        io.sockets.emit('mensaje', msg)
    })
})

httpServer.listen(PORT, () => {
    console.log(`200 OK`);
}) 