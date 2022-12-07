import * as recipesDao from "./recipes-dao.js";

const RecipesController = (app) => {

    const createRecipe = async (req, res) => {
        const recipe = req.body
        const newRecipe = await recipesDao.createRecipe(recipe)
        res.send(newRecipe)
    }

    const findRecipeByID = async (req, res) => {
        const rid = req.params['intRecipeID']
        const status = await recipesDao.findRecipeByID(rid)
        res.send(status)
    }

    const deleteRecipe = async (req, res) => {
        console.log("controller delete recipe")
        const rid = req.params['intRecipeID']
        const status = await recipesDao.deleteRecipe(rid)
        res.send(status)
    }

    app.post  ('/create-recipe', createRecipe)
    app.get   ('/recipes/:intRecipeID', findRecipeByID)
    app.delete('/recipes/:intRecipeID', deleteRecipe)
}

export default RecipesController;