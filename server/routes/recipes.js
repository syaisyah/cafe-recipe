const router = require('express').Router()
const RecipeController = require('../controllers/RecipeController')
const { authentication, authAdmin } = require('../middlewares/auth')


router.use(authentication)
router.get('/', authAdmin, RecipeController.findAllRecipes)
router.patch('/:id', authAdmin, RecipeController.deleteRecipeOfMenu)
router.get('/:id', authAdmin, RecipeController.getRecipeOfMenu)


module.exports = router
