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