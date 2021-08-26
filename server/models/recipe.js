'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recipe.belongsTo(models.Menu, {
        foreignKey: 'MenuId',
        targetKey: 'id'
      })
      Recipe.belongsTo(models.Ingredient, {
        foreignKey: 'IngredientId',
        targetKey: 'id'
      })
    }
  };
  Recipe.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    MenuId: DataTypes.INTEGER,
    IngredientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};