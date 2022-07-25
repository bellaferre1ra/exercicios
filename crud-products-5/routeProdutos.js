const express = require("express");
const routes = express.Router();
let products = require('./products');


//1
routes.get('/', (req, res) => {
    return res.send(products)

});


// 2 ID product

routes.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const buscarID = products.find((product) => product.id === id)
    return res.send(buscarID)
});

// 3 add novo produto
routes.post("/", (req, res) => {
    const newProduct = { id: products.length + 1, ...req.body.product }
    products.push(newProduct)

    return res.send(newProduct)
});


//add nova propriedade

routes.patch("/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = products.findIndex((product) => product.id === id)  
    products[index] = { ...products[index], ...req.body }
    return res.send(products[index])

});

//DELETE
routes.delete("/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = products.findIndex((product) => product.id === id) 
    const removed = products.splice(index,1)
    return res.send(removed)
});

module.exports = routes;