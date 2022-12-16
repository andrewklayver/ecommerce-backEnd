const Sequelize = require('sequelize');
const db = require('../connection/db');

const Usuario = db.define("usuarios", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.DataTypes.STRING,
    },
    email: {
        type: Sequelize.DataTypes.STRING,
    },
    senha: {
        type: Sequelize.DataTypes.STRING,
    }
});

module.exports = Usuario;
