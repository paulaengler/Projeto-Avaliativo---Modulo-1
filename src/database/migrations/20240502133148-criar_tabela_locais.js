'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  await queryInterface.createTable('locais', {
  
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
      },
    nome_do_local: {
      allowNull: false,
      type: Sequelize.STRING
     },
    descricao: { 
      type: DataTypes.STRING,
      allowNull: false,
    }
    localidade: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    coordenadas_geograficas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
     updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('locais');
  }
};
