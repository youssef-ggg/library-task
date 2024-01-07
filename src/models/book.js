'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  book.init({
    title: {
        type:DataTypes.STRING,
        allowNull:false
    },
    ISBN: {
        type:DataTypes.STRING,
        allowNull:false
    },
    author: {
        type: DataTypes.STRING,
        //allow null defualts to true
    },
    quantity: {
        type:DataTypes.INTEGER,
        allowNul:false,
        defaultValue: 0 
    },
    shelfLocation: {
        type:DataTypes.STRING,
        allowNull:false,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
      }
  }, {
    sequelize,
    modelName: 'book',
    tableName: 'book',
    freezeTableName:true
  });
  return book;
};