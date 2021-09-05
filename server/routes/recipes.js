const router = require('express').Router()
const RecipeController = require('../controllers/RecipeController')
const { authentication, authAdmin } = require('../middlewares/auth')


router.use(authentication)
router.post('/:id', authAdmin, RecipeController.addRecipeToMenu) 
router.get('/:id', authAdmin, RecipeController.getRecipeOfMenu)


module.exports = router
