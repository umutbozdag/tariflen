const Category = require("../model/category.model");

function createCategory(input) {
    return Category.create(input);
}

function findCategory(
    query,
    options = { lean: true }
) {
    return Category.findOne(query, {}, options);
}

function findCategories() {
    return Category.find().populate('recipes');
}

function findAndUpdateCategory(
    query,
    update,
    options
) {
    return Category.findOneAndUpdate(query, update, options);
}

function deleteCategory(query) {
    return Category.findOneAndDelete(query);
}

module.exports = {
    createCategory,
    findCategory,
    findCategories,
    findAndUpdateCategory,
    deleteCategory
}