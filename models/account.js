'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users}) {
      // define association here
      this.belongsTo(Users, { foreignKey: 'userId'});
    }
  }
  Account.init({
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

  }, {
    sequelize,
    tableName: 'accounts',
    modelName: 'Account',
  });
  return Account;
};