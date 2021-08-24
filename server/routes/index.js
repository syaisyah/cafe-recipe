const router = require('express').Router()
const userRoutes = require('./users')
const menuRoutes = require('./menu')
const ingredientRoutes = require('./ingredients')
const recipeRoutes = require('./recipes')


router.use('/users', userRoutes)
router.use('/menu', menuRoutes)
router.use('/ingredients', ingredientRoutes)
router.use('/recipes', recipeRoutes)


module.exports = router