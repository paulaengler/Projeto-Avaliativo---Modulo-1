'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  await queryInterface.createTable('usuarios', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
      },
    nome: {
      allowNull: false,
      type: Sequelize.STRING
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
      allowNull: false,
      references: {
        model: 'enderecos',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
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
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
     updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};
}
