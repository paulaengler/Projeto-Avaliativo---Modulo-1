const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");

const Endereco = connection.define('enderecos', {
    rua: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    complemento:{
        type: DataTypes.STRING,
        allowNull: false
    },
    bairro:{
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade:{
        type: DataTypes.STRING,
        allowNull: false
    },
    estado:{
        type: DataTypes.STRING,
        allowNull: false
    },
    pais:{
        type: DataTypes.STRING,
        allowNull: false
    },
    cep:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
})