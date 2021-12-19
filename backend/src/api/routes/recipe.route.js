const express = require('express')
const router = express.Router()
const { createRecipeHandler, getRecipesHandler, getRecipeHandler, deleteRecipeHandler, updateRecipesHandler } = require('../controller/recipe.controller')

// Create recipe
router.post('/', createRecipeHandler)

// Get recipes
router.get('/', getRecipesHandler)

// Get one recipe
router.get('/:recipeId', getRecipeHandler)

// Delete recipe
router.delete('/:recipeId', deleteRecipeHandler)

// Update recipe
router.put('/:recipeId', updateRecipesHandler)

module.exports = router