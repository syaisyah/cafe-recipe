// const dataRecipes = await Recipe.bulkCreate(newRecipe, { individualHooks: true})
const { Menu, Recipe, Ingredient, sequelize } = require('../models/')

class MenuController {
  static async createMenu(req, res, next) {
    try {
      const { menu, ingredients } = req.body;
      const newMenu = { name: menu.name, image: menu.image }
      const result = sequelize.transaction(async transaction => {
        const dataMenu = await Menu.create(newMenu)
        const newRecipe = ingredients.map(item => {
          return { MenuId: dataMenu.id, IngredientId: item.id }
        })
        await Recipe.bulkCreate(newRecipe, { transaction })
        return dataMenu
      })
      res.status(201).json({ success: true, message: "Successfully created a new menu", dataMenu: result })

    } catch (err) {
      next(err)
    }
  }

  // router.get('/', authAdmin, MenuController.getAllMenu)
  // kepake  diubah nih pake find Recipe nya juga ya 
  static async getAllMenu(req, res, next) {
    try {
      const menu = await Menu.findAll() 
      res.status(200).json(menu)
    } catch (err) {
      next(err)
    }
  }
  // router.get('/:id', authAdmin, MenuController.getDetailMenu)
  // kepake 
  static async editMenu(req, res, next) {
    const idMenu = +req.params.id;
    const menu = await Menu.findByPk(idMenu)
    if (menu) {
      const updateMenu = { name: req.body.name, image: req.body.image }
      await Menu.update(updateMenu, { where: { id: idMenu } })
      res.status(200).json({ success: true, message: `Successfully updated a menu with id ${idMenu}` })
    } else {
      next({ message: "Menu Not Found" })
    }
  }
  //kepake
  static async deleteMenu(req, res, next) {
    try {
      const idMenu = +req.params.id;
      const menu = await Menu.findByPk(idMenu)
      if (menu) {
        await Menu.destroy({ where: { id: idMenu } })
        res.status(200).json({ success: true, message: `Successfully deleted a menu with id ${idMenu}` })
      } else {
        next({ msg: "Menu Not Found" })
      }
    } catch (err) { next(err) }
  }

}

module.exports = MenuController;