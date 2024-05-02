const { DataTypes } = require("sequelize");
const { connection } = require("../database/connection");

const Local = connection.define('locais', {
    nome_do_local: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descrição:{
        type: DataTypes.STRING,
        allowNull: false
    },
    localidade:{
        type: DataTypes.STRING,
        allowNull: false
    },
    coordenadas_geograficas:{
        type: DataTypes.STRING,
        allowNull: false
    },
})

