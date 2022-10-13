'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    toJSON(){//you can define each field to get from this model here
      return { ...this.get(), id: undefined }
    }
  }

  Users.init({

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

  }, {
    sequelize,
    tableName: 'users',
    modelName: 'Users',
  });
  return Users;
};