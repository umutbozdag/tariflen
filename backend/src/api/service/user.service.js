const User = require("../model/user.model");

function createUser(input) {
    return User.create(input).populate('recipes');
}

function findUser(
    query,
    options = { lean: true }
) {
    return User.findOne(query, {}, options).populate('recipes');
}

function findUsers() {
    return User.find().populate('recipes');
}

function findAndUpdateUser(
    query,
    update,
    options
) {
    return User.findOneAndUpdate(query, update, options).populate('recipes');
}

function deleteUser(query) {
    return User.findOneAndDelete(query);
}

module.exports = {
    createUser,
    findUser,
    findUsers,
    findAndUpdateUser,
    deleteUser
}