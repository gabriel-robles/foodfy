const recipes = require('../data')

module.exports = {
    home (req, res) {
        return res.render('general/home', {
            recipes
        })
    },
    about (req, res) {
        return res.render('general/about')
    },
    recipes (req, res) {
        return res.render('general/recipes', {
            recipes
        })
    },
    information (req, res) {
        const recipeIndex = req.params.index
    
        return res.render('general/information', {
            recipe: recipes[recipeIndex]
        })
    }
}
