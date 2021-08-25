const router = require('express').Router()
const IngredientController = require('../controllers/IngredientController')
const { authentication, authAdmin } = require('../middlewares/auth')

router.use(authentication)
router.post('/', authAdmin, IngredientController.createIngredient)
router.get('/', authAdmin, IngredientController.getAllIngredients)
router.get('/:id', authAdmin, IngredientController.getDetailIngredient)
router.patch('/:id', authAdmin, IngredientController.editDetailIngredient)
router.delete('/:id', authAdmin, IngredientController.deleteIngredient)



module.exports = router

