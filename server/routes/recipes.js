const router = require('express').Router()
const RecipeController = require('../controllers/RecipeController')
const { authentication, authAdmin } = require('../middlewares/auth')


app.use(authentication)
router.get('/', authAdmin, RecipeController.findAllRecipes)
router.patch('/:id', RecipeController.deleteRecipeOfMenu)

module.exports = router
