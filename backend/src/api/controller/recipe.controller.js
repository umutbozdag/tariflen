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

async function uploadRecipeImageHandler(req, res) {
    const recipeId = req.params.recipeId
    let body = req.body;
    let image

    let recipe = await findRecipe({ recipeId });
    if (!recipe) {
        return res.sendStatus(404);
    }
    if (req.file) {
        console.log('FILE', req.file)
        const host = req.host;
        const filePath = req.protocol + "://" + host + '/' + req.file.path;

        image = req.file;
        body = {
            image,
            recipeImagePath: filePath
        }

    }

    const updatedRecipe = await findAndUpdateRecipe({ recipeId: req.params.recipeId }, {
        ...body
    }, {
        new: true,
    });

    return res.send(updatedRecipe);
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
    const query = req.query.search ? { $text: {$search: req.query.search}} : {};

    const recipes = await findRecipes(query).sort({ updatedAt: -1 });
    
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
    getRecipeHandler,
    uploadRecipeImageHandler
}