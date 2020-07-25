const express = require('express')
const general = require('./controllers/general')
const admin = require('./controllers/admin')

const routes = express.Router()

routes.get('/', general.home)
routes.get('/about', general.about)
routes.get('/recipes', general.recipes)
routes.get('/recipes/:id', general.show)

routes.get('/admin/recipes', admin.index)
routes.get("/admin/recipes/create", admin.create)
routes.get("/admin/recipes/:id", admin.show)
routes.get("/admin/recipes/:id/edit", admin.edit)
routes.post("/admin/recipes", admin.post)

module.exports = routes