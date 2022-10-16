'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('accounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },

      guid : {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,//generae unique ids
      },

      accountId: {
        type: DataTypes.CHAR,
        allowNull: true,
        defaultValue: 'default',
      },
  
      accountname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
      bankname:{
        type: DataTypes.STRING,
        allowNull: false,
      },
  
      accountnumber:{
        type: DataTypes.BIGINT,
        allowNull: false,
      },
  
      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
  
      depositor:{
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },

      description:{
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
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
    await queryInterface.dropTable('accounts');
  }
};