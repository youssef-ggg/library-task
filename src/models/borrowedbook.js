'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BorrowedBook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user)
      this.belongsTo(models.book)
    }
  }
  BorrowedBook.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId:{ 
      type: DataTypes.INTEGER

    },
    bookId: {
      type: DataTypes.INTEGER
    },
    dueDate: {
      type:DataTypes.DATE
    },
    returned: {
      type: Sequelize.BOOLEAN,
      allowNull:false,
      defaultValue: false,
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
    modelName: 'borrowedBook',
    tableName: 'borrowedBook',
    freezeTableName: true
  });
  return BorrowedBook;
};