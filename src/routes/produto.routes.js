const express = require("express");
const criandoProdutoController = require("../controllers/Produto/criandoProdutoController");
const loginProdutoController = require("../controllers/Produto/loginProdutoController");
const {pegandoProdutoController} = require("../controllers/produto/pegandoProdutoController");
const pegandoProdutoPkController = require("../controllers/Produto/pegandoProdutoPkController");
const alterandoProdutoController = require("../controllers/Produto/alterandoProdutoController");

const ProdutoRoute = express.Router();

ProdutoRoute.post("/produto",criandoProdutoController);

ProdutoRoute.get("/produto", pegandoProdutoController);

ProdutoRoute.get("/produto/:id", pegandoProdutoPkController);

ProdutoRoute.get("/produto",loginProdutoController);
  
ProdutoRoute.put("/produto/:id", alterandoProdutoController);
  
ProdutoRoute.delete("/:id", async (req,res)=>{
    let Produto = require('../models/Produto');
    const id = req.params.id;
    const ProdutoDeletar = await Produto.destroy({where: {
      id: id
    }});
    return res.json({ProdutoDeletar});
});

module.exports = ProdutoRoute;
