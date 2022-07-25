const express = require("express");
const productRout = require("./routeProdutos")
const app = express();
app.use(express.json())
app.use("/products",productRout)


app.listen(3000, () => console.log('server rodando na porta 3000'));