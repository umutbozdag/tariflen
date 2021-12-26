const express = require('express')
const router = express.Router()
const { createRecipeHandler, getRecipesHandler, getRecipeHandler, deleteRecipeHandler, updateRecipesHandler, uploadRecipeImageHandler } = require('../controller/recipe.controller')
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path.join(__dirname, '../../uploads/'));
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

const upload = multer({
    storage, limits: {
        fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) {
            // upload only png and jpg format
            return cb(new Error('Please upload a Image'))
        }
        cb(undefined, true)
    }
})

// Create recipe
router.post('/', createRecipeHandler)

router.post('/:recipeId/upload', upload.single('file'), uploadRecipeImageHandler)

// Get recipes
router.get('/', getRecipesHandler)

// Get one recipe
router.get('/:recipeId', getRecipeHandler)

// Delete recipe
router.delete('/:recipeId', deleteRecipeHandler)

// Update recipe
router.put('/:recipeId', updateRecipesHandler)

module.exports = router