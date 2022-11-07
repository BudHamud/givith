const express = require("express");
// const moment = require('moment')
const fs = require("fs/promises");
const app = express();
const PORT = 8080;
const classContenedor = require('./container/Contenedor')

// Provando moment.js

// const visitas = {
//   productos: 0,
//   fecha_ingreso: '',
//   random: 0,
//   fecha_ingreso_random: ''
// }

const productos = new classContenedor("./products.json");

app.get("/", (req, ans) => {
  ans.send(`<h1 style="color: #666">Bienvenido</h1>`);
});

app.get("/productos", async (req, ans) => {
  // visitas.productos++
  // visitas.fecha_ingreso = moment().format('MMMM Do YYYY, h:mm:ss a')
  const prods = await productos.getAll()
  ans.send(prods);
});

app.get('/random', async (req, ans) => {
  // visitas.random++
  // visitas.fecha_ingreso_random = moment().format('MMMM Do YYYY, h:mm:ss a')
  const prods = await productos.getAll()
  const number = Math.ceil(Math.random()*prods.length - 1)
  const getRandom = prods[number]
  ans.send(getRandom)
});

// app.get('/visitas', (req, ans) => {
//   ans.send({ visitas })
// })

// Puerto

const server = app.listen(PORT, () => {
  console.log(`Servidor express en el punto: ${PORT}`);
});