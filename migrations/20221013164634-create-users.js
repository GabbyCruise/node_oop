'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },

      guid : {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,//used to generae unique ids
      },

      name: {
        type:  DataTypes.STRING,
        allowNull: false,
      },
  
      email: {
        type:  DataTypes.STRING,
        allowNull: false,
      },
  
      role: {
        type:  DataTypes.STRING,
        allowNull: false,
      },

      branch: {
        type:  DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },

      account_number: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
  
      book_balance: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: 0,
      },
  
      available_balance: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: 0,
      },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('users');
  }
};