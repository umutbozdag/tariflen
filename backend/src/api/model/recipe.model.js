const mongoose = require("mongoose");
const { nanoid } = require("nanoid");

// https://stackoverflow.com/a/39869551

const RecipeSchema = new mongoose.Schema({
    recipeId: {
        type: String,
        required: true,
        unique: true,
        default: () => nanoid(24),
    },
    title: { type: String, required: true, default: '' },
    description: { type: String, default: '' },
    ingredients: { type: Array, default: [] },
    categoryId: { type: String, required: true },
    authorId: { type: String, required: true },
    image: {
        data: Buffer,
        contentType: String
    },
    comments: [{
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        content: { type: String, required: true },
        rate: { type: Number },
    }],
    cookingTime: { type: String, required: true },
    mealFor: { type: Number, required: true }
},
    { timestamps: true, toJSON: { virtuals: true } }
);

RecipeSchema.virtual('author', {
    ref: 'User',
    localField: 'authorId',
    foreignField: 'userId'
})

RecipeSchema.index({name: 'text', 'title': 'text'});


// TODO
// RecipeSchema.virtual('comments', [{

// }])


const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;