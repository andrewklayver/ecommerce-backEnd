const Sequelize = require('sequelize');
const db = require('../connection/db');

const Carrinho = db.define("carrinho", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    usuario_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
    },
    produto_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
    },
    status: {
        type: Sequelize.STRING,

    }
});

module.exports = Carrinho;
