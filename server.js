const express = require("express");
const app = express();
const PORT = 8080;
let visitas = 1

app.get("/", (req, ans) => {
  ans.send(`<h1 style="color: lightblue">Hola</h1>`);
});

app.get("/visitas", (req, ans) => {
  visitas += 1;
  ans.send(`Contador de visitas: ${visitas}`);
});

app.get("/fyh", (req, ans) => {
    let fyh = new Date()
  ans.send(`${fyh.toLocaleString()}`);
});

// Puerto
const server = app.listen(PORT, () => {
  console.log(`Servidor express en el punto: ${PORT}`);
});
