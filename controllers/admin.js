const recipes = require('../data')

module.exports = {
    index(req, res) {
        res.render('admin/recipes', {
            recipes
        })
    },
    create(req, res) {
        res.render('admin/create')
    },
    show(req, res) {
        const recipeId = req.params.id

        return res.render('admin/show', {
            recipe: recipes[recipeId]
        })
    }
}