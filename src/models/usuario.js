const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");

const Usuario = connection.define('usuarios', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sexo: {
        type: DataTypes.ENUM('Feminino', 'Masculino'), 
        allowNull: false
    },
    cpf: {
        type: DataTypes.INTEGER(11),
        unique: true,
        allowNull: false
    },
    endereço: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,   
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}) 