const { Menu, Recipe, Ingredient } = require('../models/')

class MenuController {
  static async createMenu(req, res, next) {
    try {
      // ngambil id dari ingredients nya buat dimasukin ke recipe table
      // recipes : { MenuId: id, IngredientId: id } // dari client 
      console.log(req.body, 'ini req.body createMenu >>>>>>>>>>>>>>>>>>')
      // const { name, image } = req.body;
      // const newMenu = { name, image }
      // const menu = await Menu.create(newMenu)
      // const dataRecipes = await Recipe.create({
      //   MenuId: recipes.MenuId,
      //   Ingredient: recipes.IngredientId
      // })

      // res.status(201).json({ success: true, message: "Successfully created a new menu" })

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

  // static async getDetailMenu(req, res, next) { // kepake di tombol detail
  //   try {
  //     const idMenu = +req.params.id;
  //     const menu = await Menu.findByPk(idMenu)
  //     if (menu) {
  //       const recipes = await Recipe.findAll({ where: { MenuId: idMenu } })
  //       if (recipes) {
  //         res.status(200).json({ data: menu, recipes })
  //       } else {
  //         next({ msg: "Recipe Not Found" })
  //       }
  //     } else {
  //       next({ msg: "Menu Not Found" })
  //     }
  //   } catch (err) { next(err) }
  // }
  // router.put('/:id', authAdmin, MenuController.editDetailMenu)
  // harusnya resep nya juga diedit 
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
  // router.delete('/:id', authAdmin, MenuController.deleteMenu)
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