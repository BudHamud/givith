const fs = require('fs/promises')

class Contenedor {
    constructor(path) {
      this.path = path;
    }

    async getAll() {
      const leer = await fs.readFile(this.path, "utf-8");
      return JSON.parse(leer);
    }
  
    async save(obj) {
      try {
        const data = this.getAll()
        let id;
        data.length === 0 ? (id = 1) : (id = data[data.length - 1].id + 1);
        const nuevoProducto = { ...obj, id };
        data.push(nuevoProducto);
        await fs.writeFile(this.path, JSON.stringify(data, null, 2), "utf-8");
        return nuevoProducto.id;
      } catch (e) {
        console.log(e);
      }
    }
  
    async getById(id) {    
      const data = this.getAll()
      const obj = data.find(e => e.id === id)
      return obj
    }
  
    async deleteById(id) {   
      const data = this.getAll()
      const obj = data.find(e => e.id === id)
      data.splice(data.indexOf(obj), 1)
      await fs.writeFile(this.path, JSON.stringify(data, null, 2), "utf-8");
    }
  
    async deleteAll() {
      try {
        await fs.writeFile(this.path, JSON.stringify([], null, 2), "utf-8");
      } catch (e) {
        console.log(e);
      }
    }
  }

  module.exports = Contenedor