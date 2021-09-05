const { Recipe, Menu, Ingredient, sequelize } = require('../models/');



class RecipeController {
  // edit resep di menu tertentu
  // kepake 
  static async getRecipeOfMenu(req, res, next) { // kepake di tombol recipe
    try {
      const idMenu = +req.params.id;
      const recipes = await Recipe.findAll(
        {
          where: { MenuId: idMenu },
          include: [
            { model: Ingredient }
          ]
        })
      if (recipes) {
        res.status(200).json(recipes)
      } else {
        next({ msg: "Recipe Not Found" })
      }

    } catch (err) { next(err) }
  }




  // kepake
  static async addRecipeToMenu(req, res, next) {
    try {
      let menuId = +req.params.id;
      let data = req.body.recipes;
      let newData = data.map((recipe, i) => {
        return {
          MenuId: menuId,
          IngredientId: recipe.id
        }
      })
      const result = sequelize.transaction(async transaction => {
        await Recipe.destroy({
          where: { MenuId: menuId}
        })
        const newRecipe = await Recipe.bulkCreate(newData, {transaction})
        
      })
      res.status(201).json({ message: "Successfully add recipe of menu"})
    } catch (err) { next(err) }
  }
}

module.exports = RecipeController