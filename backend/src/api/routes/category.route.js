const express = require('express')
const router = express.Router()
const { createCategoryHandler, getCategoriesHandler, getCategoryHandler, deleteCategoryHandler, updateCategoriesHandler } = require('../controller/category.controller')

// Create category
router.post('/', createCategoryHandler)

// Get categorys
router.get('/', getCategoriesHandler)

// Get one category
router.get('/:categoryId', getCategoryHandler)

// Delete category
router.delete('/:categoryId', deleteCategoryHandler)

// Update category
router.put('/:categoryId', updateCategoriesHandler)

module.exports = router