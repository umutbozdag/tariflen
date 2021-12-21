const express = require('express')
const config = require('config');
const connect = require("../db/connect.js");
const cors = require("cors");

const searchRoute = require('./api/routes/search.route.js')
const recipeRoute = require('./api/routes/recipe.route.js')
const userRoute = require('./api/routes/user.route.js')
const categoryRoute = require('./api/routes/category.route.js')

const port = config.get("port");

const app = express()

app.use(cors({credentials: true, origin: true}));
app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/search', searchRoute)
app.use('/recipe', recipeRoute)
app.use('/user', userRoute)
app.use('/category', categoryRoute)

app.listen(port, () => {
    connect();
    console.log(`Example app listening at http://localhost:${port}`)
})