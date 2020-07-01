const express = require('express')
const recipes = require('./data')

const routes = express.Router()

routes.get('/', function (req, res) {
    return res.render('home', {
        recipes
    })
})

routes.get('/about', function (req, res) {
    return res.render('about')
})

routes.get('/recipes', function (req, res) {
    return res.render('recipes', {
        recipes
    })
})

routes.get('/recipes/:index', function (req, res) {
    const recipe = recipes
    const recipeIndex = req.params.index

    return res.render('information', {
        recipe: recipe[recipeIndex]
    })
})

module.exports = routes