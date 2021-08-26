const { Recipe, Menu, Ingredient } = require('../models/');



class RecipeController {
  static async findAllRecipes(req, res, next) {
    try {
      const data = await Recipe.findAll({
        include: [
          { model: Menu },
          { model: ingredient }
        ]
      })
      res.status(200).json({ success: true, data })
    } catch (err) {
      next(err)
    }
  }

  static async deleteRecipeOfMenu(req, res, next) {
    try {
      const recipeId = +req.params.id;
      const recipe = await Recipe.findByPk(+recipeId)
      if (recipe) {
        await Recipe.destroy(recipeId)
        res.status(200).json({ success: true, message: "Successfully deleted some recipes of menu" })
      } else {
        next({ msg: "Recipe Not Found" })
      }
    } catch (err) {
      next(err)
    }
  }
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
}

module.exports = RecipeController