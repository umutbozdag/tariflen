const express = require('express')
const config = require('config');
const connect = require("../db/connect.js");

const searchRoute = require('./api/routes/search.route.js')
const recipeRoute = require('./api/routes/recipe.route.js')

const port = config.get("port");

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/search', searchRoute)
app.use('/recipe', recipeRoute)

app.listen(port, () => {
    connect();
    console.log(`Example app listening at http://localhost:${port}`)
})