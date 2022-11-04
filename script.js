

class Contenedor {
  constructor(nombre, precio, foto, id) {
    this.nombre = nombre;
    this.precio = precio;
    this.foto = foto;
    this.id = id;
  }

  save(obj) {
    console.log(obj.id);
  }

  getById(num) {
    console.log(num.find(num => num === num.id))
  }

  async getAll() {
    
  }

  deleteById(num) {

  }

  deleteAll() {
    
  }
}

let cont = new Contenedor('Jarron', 20, 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Chinese_vase.jpg/800px-Chinese_vase.jpg', 1)
let cont1 = new Contenedor('Autito', 230, 'imagen', 2)
let cont2 = new Contenedor('Termo', 2450, 'imagen', 3)

cont2.save()

// const http = require('http')

// const server = http.createServer((peticion, respuesta) => {
//   respuesta.end(getHora())
// })

// const connectedServer = server.listen(8080, () => {
//   console.log('server http escuchando puerto 8080');
// })

// function getHora() {
//   const hora = new Date().getHours()

//   const connectedServer = server.listen(8080, () => {
//     if (hora >= 6 || hora <= 12) {
//       return ('Buenos días')
//     } else if (hora >= 13 && hora <= 19) {
//       return ('Buenas tardes')
//     } else {
//       return ('Buenas noches')
//     }
//   })
// }