const {
    createRecipe,
    findRecipe,
    findAndUpdateRecipe,
    deleteRecipe,
    findRecipes,
} = require("../service/recipe.service");

async function createRecipeHandler(req, res) {
    const body = req.body;

    const recipe = await createRecipe({ ...body });

    return res.send(recipe);
}

async function updateRecipesHandler(req, res) {
    const recipeId = req.params.recipeId
    const update = req.body;

    const recipe = await findRecipe({ recipeId });

    if (!recipe) {
        return res.sendStatus(404);
    }

    const updatedRecipe = await findAndUpdateRecipe({ recipeId }, update, {
        new: true,
    });

    return res.send(updatedRecipe);
}

async function getRecipeHandler(req, res) {
    const recipeId = req.params.recipeId;
    const recipe = await findRecipe({ recipeId });

    if (!recipe) {
        return res.sendStatus(404);
    }

    return res.send(recipe);
}

async function getRecipesHandler(req, res) {
    const recipes = await findRecipes().sort({ updatedAt: -1 });

    return res.send(recipes);
}

async function deleteRecipeHandler(req, res) {
    const recipeId = req.params.recipeId;

    const recipe = await findRecipe({ recipeId });

    if (!recipe) {
        return res.sendStatus(404);
    }

    await deleteRecipe({ recipeId });

    return res.sendStatus(200);
}

module.exports = {
    createRecipeHandler,
    updateRecipesHandler,
    findAndUpdateRecipe,
    getRecipesHandler,
    deleteRecipeHandler,
}