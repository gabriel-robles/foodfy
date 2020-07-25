
const fs = require('fs') 
const data = require('../data.json')

module.exports = {
    index(req, res) {
        res.render('admin/recipes', {
            recipes: data.recipes
        })
    },
    create(req, res) {
        res.render('admin/create')
    },
    show(req, res) {
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

        return res.render('admin/show', {
            recipe
        })
    },
    edit(req, res) {
        const {
            id
        } = req.params.id 

        foundRecipe = data.recipes.find((recipe) => {
            return recipes.id == id
        })

        if (!foundRecipe) return res.send('Recipe not found')

        const recipe = {
            ...foundRecipe
        }

        return res.render('admin/edit', {
            recipe
        })
    },
    post(req, res) {
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                res.send('Please fill all fields')
            }
        }

        const lastRecipe = data.recipes[data.recipes.length - 1]
        let id = 1

        if (lastRecipe) {
            id = lastRecipe.id + 1 
        }

        data.recipes.push({
            id,
            ...req.body
        })

        fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err) {
            if (err) return res.send('Write file error')

            res.render('admin/recipes', {
                recipes: data.recipes
            })
        })
    }
}