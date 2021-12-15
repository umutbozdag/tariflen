const Recipe = require("../model/recipe.model");

function createRecipe(input) {
    return Recipe.create(input);
}

function findRecipe(
    query,
    options = { lean: true }
) {
    return Recipe.findOne(query, {}, options);
}

function findRecipes() {
    return Recipe.find();
}

function findAndUpdateRecipe(
    query,
    update,
    options
) {
    return Recipe.findOneAndUpdate(query, update, options);
}

function deleteRecipe(query) {
    return Recipe.findOneAndDelete(query);
}

module.exports = {
    createRecipe,
    findRecipe,
    findRecipes,
    findAndUpdateRecipe,
    deleteRecipe
}