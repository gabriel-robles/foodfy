const express = require('express')
const general = require('./controllers/general')

const routes = express.Router()

routes.get('/', general.home)
routes.get('/about', general.about)
routes.get('/recipes', general.recipes)
routes.get('/recipes/:index', general.information)

module.exports = routes