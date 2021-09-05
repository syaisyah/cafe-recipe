const router = require('express').Router()
const RecipeController = require('../controllers/RecipeController')
const { authentication, authAdmin } = require('../middlewares/auth')


router.use(authentication)
router.get('/', authAdmin, RecipeController.findAllRecipes)
router.post('/:id', authAdmin, RecipeController.addRecipeToMenu) // belum masuk api doc, id dari si menu
router.get('/:id', authAdmin, RecipeController.getRecipeOfMenu)


module.exports = router
