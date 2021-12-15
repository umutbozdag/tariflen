const express = require('express')
const router = express.Router()
const { createRecipeHandler, getRecipesHandler } = require('../controller/recipe.controller')

// Create recipe
router.post('/', createRecipeHandler)

// Get recipes
router.get('/', getRecipesHandler)

module.exports = router