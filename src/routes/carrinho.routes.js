const express = require("express");
const criandoCarrinhoController = require("../controllers/Carrinho/criandoCarrinhoController");
const loginCarrinhoController = require("../controllers/Carrinho/loginCarrinhoController");
const {pegandoCarrinhoController} = require("../controllers/Carrinho/pegandoCarrinhoController");
const pegandoCarrinhoPkController = require("../controllers/Carrinho/pegandoCarrinhoPkController");
const alterandoCarrinhoController = require("../controllers/Carrinho/alterandoCarrinhoController");

const CarrinhoRoute = express.Router();

CarrinhoRoute.post("/Carrinho",criandoCarrinhoController);

CarrinhoRoute.get("/Carrinho", pegandoCarrinhoController);

CarrinhoRoute.get("/Carrinho/:id", pegandoCarrinhoPkController);

CarrinhoRoute.get("/Carrinho",loginCarrinhoController);
  
CarrinhoRoute.put("/Carrinho/:id", alterandoCarrinhoController);
  
CarrinhoRoute.delete("/:id", async (req,res)=>{
    let Carrinho = require('../models/Carrinho');
    const id = req.params.id;
    const CarrinhoDeletar = await Carrinho.destroy({where: {
      id: id
    }});
    return res.json({CarrinhoDeletar});
});

module.exports = CarrinhoRoute;
