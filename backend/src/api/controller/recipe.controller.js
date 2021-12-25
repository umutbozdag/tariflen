const {
    createRecipe,
    findRecipe,
    findAndUpdateRecipe,
    deleteRecipe,
    findRecipes,
} = require("../service/recipe.service");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, '/src/uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname);
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

async function createRecipeHandler(req, res) {
    const body = req.body;
    let image;

    if (req.file) {
        upload.single('recipeImage');
        const host = req.host;
        const filePath = req.protocol + "://" + host + '/' + req.file.path;

        image = req.file;
        body = {
            ...body,
            image,
            recipeImagePath: filePath
        }

    }

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
    getRecipeHandler
}