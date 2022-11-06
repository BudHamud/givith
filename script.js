const fs = require("fs/promises");

class Contenedor {
  constructor(path) {
    this.path = path;
  }

  async save(obj) {
    try {
      const leer = await fs.readFile(this.path, "utf-8");
      const data = JSON.parse(leer);
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
    const leer = await fs.readFile(this.path, "utf-8");    
    const data = JSON.parse(leer);
    const obj = data.find(e => e.id === id)
    return obj
  }

  async getAll() {
    const leer = await fs.readFile(this.path, "utf-8");
    return JSON.parse(leer);
  }

  async deleteById(id) {
    const leer = await fs.readFile(this.path, "utf-8");    
    const data = JSON.parse(leer);
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

const productos = new Contenedor("./products.json");

const producto1 = {
  nombre: "Oldboy",
  precio: 3900,
  stock: 11,
};

const producto2 = {
  nombre: "20th Century Boys",
  precio: 3950,
  stock: 9,
};

const producto3 = {
  nombre: "Banana Fish",
  precio: 1900,
  stock: 16,
};