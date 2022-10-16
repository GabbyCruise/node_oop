'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Account}) {
      // define association here
      this.hasMany(Account, { foreignKey: 'accountId'});
    }

    toJSON(){//you can define each field to get from this model here
      return { ...this.get(), id: undefined, updatedAt: undefined }
    }
  }

  Users.init({

    guid : {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,//generae unique ids
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
    }

  }, {
    sequelize,
    tableName: 'users',
    modelName: 'Users',
  });
  return Users;
};