class Contenedor {
    constructor() {
      this.productos = [];
    }

    getAll() {
      return this.productos
    }

    getById(id) {
      const myObj = this.productos.find((e) => e.id === id)
      if (myObj) {
        return myObj
      } else {
        return { error: 'producto no encontrado' }
      }
    }
  
    save(obj) {    
      const arr = this.productos.map((e) => e.id)
      const maxId = arr.length === 0 ? 0 : Math.max(...arr)
      const id = maxId + 1
      const nuevoObj = { id, ...obj }
      this.productos.push(nuevoObj)
      return nuevoObj
    }

    updById(id, obj) {
      const myObj = this.productos.find((e) => e.id === id)
      if (myObj) {
        const filter = this.productos.filter((e) => e.id != id)
        const nuevoObj = { id, ...obj }
        this.productos = [...filter, nuevoObj]
        return nuevoObj
      } else {
        return { error: 'producto no encontrado' }
      }
    }
  
    deleteById(id) {
      return this.productos.splice(id-1, 1)
    }
  }

  module.exports = Contenedor