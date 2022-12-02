const socket = io.connect()
let date = new Date().toLocaleTimeString()

const render = (data) => {
    const html = data.map(e => {
        return (
            `<div class="chat">
                <span>${e.fecha}</span> <span>${e.autor}</span>: ${e.texto}
            </div>`
        )
    }).join(' ')

    document.getElementById('mensajes').innerHTML = html
}

const renderProd = (data) => {
    const html = data.map(e => {
        return (
            `<tr>
                <td>${e.producto}</td>
                <td>$${e.precio}</td>
            </tr>`
        )
    }).join(' ')

    document.getElementById('productos').innerHTML = html
}

const addMsg = () => {
    const autor = document.getElementById('autor').value
    const texto = document.getElementById('texto').value

    const msg = {
        autor: autor ? autor : 'Anónimo',
        texto: texto,
        fecha: date
    }

    document.getElementById('texto').value = ''

    socket.emit('nuevo-mensaje', msg)

    return false
}

const addProd = () => {
    const producto = document.getElementById('producto').value
    const precio = document.getElementById('precio').value

    const prod = {
        producto: producto,
        precio: precio,
    }

    socket.emit('nuevo-producto', prod)

    return false
}

socket.on('mensaje', data => {
    render(data)
})

socket.on('producto', data => {
    renderProd(data)
})