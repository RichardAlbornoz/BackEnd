const express = require("express");
const fs = require('fs');
const app = express();
const archivoLocal = `../Desafio2/productos.txt`

const PORT = 8080;

let Contendor = require('../Desafio2/index') 
let nuevoContenedor = new Contendor(archivoLocal)

app.get("/", (req, res) => {
    let titulo = `<h1 style="color:blue; background-color:white; text-align:center">Entrega de Desafio</h1><hr><a href="/productos"><button>IR A PRODUCTOS</button></a><hr><a href="/productoRandom"><button>IR A PRODUCTOS ALEATORIOS</button></a><hr><p>Se crean los botones para acceso más facil!</p>`
    res.send(titulo); 
})

app.get("/productos", (req, res) => {
    (async () => {
        contenido = await nuevoContenedor.getAll();
        let productos = [];
        contenido.forEach(element => {
            productos.push(element.title);
        });
        res.send({
            items: productos
        })
    })();
})

app.get("/productoRandom", (req, res) => {
    let randomNumber = Math.ceil(Math.random() * (5)) - 1;
    (async () => {
        contenido = await nuevoContenedor.getAll();
        let productos = [];
        contenido.forEach(element => {
            productos.push(element.title);
        });
        res.send({
            items: productos[randomNumber]
        })
    })();
})

const server = app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`);
})