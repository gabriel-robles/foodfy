const data = require('../data.json')

module.exports = {
    home (req, res) {
        return res.render('general/home', {
            recipes: data.recipes
        })
    },
    about (req, res) {
        return res.render('general/about')
    },
    recipes (req, res) {
        return res.render('general/recipes', {
            recipes: data.recipes
        })
    },
    show (req, res) {
        const {
            id
        } = req.params 

        foundRecipe = data.recipes.find((recipe) => {
            return recipe.id == id
        })

        if (!foundRecipe) return res.send('Recipe not found')

        const recipe = {
            ...foundRecipe
        }

        return res.render('general/show', {
            recipe
        })
    }
}
