const router = require('express').Router()
const MenuController = require('../controllers/MenuController')
const { authentication, authAdmin } = require('../middlewares/auth')

router.use(authentication)
router.post('/', authAdmin, MenuController.createMenu) // crate beserta ingredients 
router.get('/', authAdmin, MenuController.getAllMenu)
// router.get('/:id', authAdmin, MenuController.getDetailMenu) //nampilin resep nya getRecipeOfMenu
router.put('/:id', authAdmin, MenuController.editMenu) // cuman edit name dan image
router.delete('/:id', authAdmin, MenuController.deleteMenu)



module.exports = router

// ingredients nya ada apa aja, nanti di tampung di array dulu
// jadi setiap elemen array ini ada 

// delete suatu ingredient dari resep menu
