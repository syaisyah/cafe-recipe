'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Menu.belongsToMany(models.Ingredient, {
        through: models.Recipe,
        foreignKey: 'MenuId'
      })
    }
  };
  Menu.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          args: true,
          masg: 'Menu name is required'
        },
        notEmpty: {
          args: true,
          msg: 'Menu name is required'
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          args: true,
          masg: 'Menu image is required'
        },
        notEmpty: {
          args: true,
          msg: 'Menu image is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};