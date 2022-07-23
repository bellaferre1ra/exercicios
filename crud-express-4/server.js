const express = require("express");

const app = express();
app.use(express.json())

let products = []
//GET
app.get("/", function (req, res) {
    res.send(products)

})

//POST
app.post("/", (req, res) => {
    products.push(...req.body.products)
    res.send(req.body.products)
})

//PUT
app.put("/:id", (req, res) => {
    products[req.params.id] = req.body.product
    res.send(req.body.product)
})
//DELETE
app.delete("/:id", (req, res) => {
    const deleted = products.splice(req.params.id, 1)
    res.send(deleted)
})

app.listen(3000, () => console.log('server rodando na porta 3000'));
