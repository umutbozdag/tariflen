const {
    createCategory,
    findCategory,
    findAndUpdateCategory,
    deleteCategory,
    findCategories,
} = require("../service/category.service");
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

async function createCategoryHandler(req, res) {
    const body = req.body;
    let image;

    if (req.file) {
        upload.single('categoryImage');
        const host = req.host;
        const filePath = req.protocol + "://" + host + '/' + req.file.path;

        image = req.file;
        body = {
            ...body,
            image,
            categoryImagePath: filePath
        }
        
    }

    const category = await createCategory({ ...body });

    return res.send(category);
}

async function updateCategoriesHandler(req, res) {
    const categoryId = req.params.categoryId
    const update = req.body;

    const category = await findCategory({ categoryId });

    if (!category) {
        return res.sendStatus(404);
    }

    const updatedCategory = await findAndUpdateCategory({ categoryId }, update, {
        new: true,
    });

    return res.send(updatedCategory);
}

async function getCategoryHandler(req, res) {
    const categoryId = req.params.categoryId;
    const category = await findCategory({ categoryId });

    if (!category) {
        return res.sendStatus(404);
    }

    return res.send(category);
}

async function getCategoriesHandler(req, res) {
    const categorys = await findCategories().sort({ updatedAt: -1 });

    return res.send(categorys);
}

async function deleteCategoryHandler(req, res) {
    console.log(req.params.categoryId);
    const categoryId = req.params.categoryId;

    const category = await findCategory({ categoryId });

    if (!category) {
        return res.sendStatus(404);
    }

    await deleteCategory({ categoryId });

    return res.sendStatus(200);
}

module.exports = {
    createCategoryHandler,
    updateCategoriesHandler,
    findAndUpdateCategory,
    getCategoriesHandler,
    deleteCategoryHandler,
    getCategoryHandler
}