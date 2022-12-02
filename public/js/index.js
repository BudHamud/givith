const socket = io.connect()

const render = (data) => {
    const html = data.map(e => {
        return (`<div class="chat"><span>${e.autor}</span>: ${e.texto}</div>`)
    }).join(' ')

    document.getElementById('mensajes').innerHTML = html
}

const addMsg = (e) => {
    const autor = document.getElementById('autor').value
    const texto = document.getElementById('texto').value

    const msg = {
        autor: autor,
        texto: texto
    }

    document.getElementById('texto').value = ''

    socket.emit('nuevo-mensaje')

    return false
}

socket.on('mensaje', data => {
    render(data)
})