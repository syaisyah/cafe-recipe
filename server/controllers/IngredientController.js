const { Ingredient } = require('../models/')

class IngredientController {
  // router.post('/', IngredientController.createIngredient)
  static async createIngredient(req, res, next) {
    try {
      const newIngredient = { name: req.body.name }
      const ingredient = await Ingredient.create(newIngredient)
      res.status(201).json({ success: true, message: "Successfully created a new ingredient", ingredient })
    } catch (err) { next(err) }
  }
  // router.get('/', IngredientController.getAllIngredient)
  static async getAllIngredients(req, res, next) {
    console.log('masuk getAllIngredients >>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    try {
      const ingredients = await Ingredient.findAll()
      console.log(ingredients, ' getAllIngredients >>>>>>>>>>>>>>>>>>>>>>>>>>> ')
      res.status(200).json(ingredients)
    } catch (err) {
      next(err)
    }
  }
  // router.get('/:id', IngredientController.getDetailIngredient)
  static async getDetailIngredient(req, res, next) {
    try {
      const ingredient = Ingredient.findByPk(+req.params.id)
      if (ingredient) {
        res.status(200).json(ingredient)
      } else next({ msg: "Ingredient Not Found" })

    } catch (err) { next(err) }
  }
  // router.patch('/:id', IngredientController.editDetailIngredient)
  static async editDetailIngredient(req, res, next) {
    try {
      const id = +req.params.id;
      const ingredient = Ingredient.findByPk(id)
      if (ingredient) {
        const newData = { name: req.body.name }
        await Ingredient.update(newData, { where: { id } })
        res.status(200).json({ success: true, message: `Successfully updated a ingredient with id ${id}` })
      } else next({ msg: "Ingredient Not Found" })
    } catch (err) { next(err) }
  }
  // router.delete('/:id', IngredientController.deleteIngredient)
  static async deleteIngredient(req, res, next) {
    try {
      const id = +req.params.id;
      const ingredient = await Ingredient.findByPk(id)
      if (ingredient) {
        await Ingredient.destroy({ where: { id } })
      } else next({ msg: "Ingredient Not Found" })
    } catch (err) {
      next(err)
    }
  }

}

module.exports = IngredientController;