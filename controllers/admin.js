const recipes = require('../data')

module.exports = {
    index(req, res) {
        res.render('admin/recipes', {
            recipes
        })
    },
    create(req, res) {
        res.render('admin/create')
    }
}