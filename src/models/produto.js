const Sequelize = require('sequelize');
const db = require('../connection/db');

const Produto = db.define("produtos", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titulo: {
        type: Sequelize.DataTypes.STRING,
    },
    descricao: {
        type: Sequelize.DataTypes.STRING,
    },
    valor: {
        type: Sequelize.DataTypes.FLOAT,
    }
});

module.exports = Produto;
