import * as recipesDao from "./recipes-dao.js";

const RecipesController = (app) => {

    const createRecipe = async (req, res) => {
        const recipe = req.body
        const newRecipe = await recipesDao.createRecipe(recipe)
        res.send(newRecipe)
    }

    const addRecommendation = async (req, res) => {
        console.log("addRecommendation controller")
        const recommendation = req.body
        console.log(recommendation)
        const updatedRecipe = await recipesDao.addRecommendation(recommendation)
        res.send(updatedRecipe)
    }

    const removeRecommendation = async (req, res) => {
        console.log("removeRecommendation controller")
        const rid = req.params['intRecipeID']
        const updatedRecipe = await recipesDao.removeRecommendation(rid)
        res.send(updatedRecipe)
    }

    const findRecipeByID = async (req, res) => {
        const rid = req.params['intRecipeID']
        const status = await recipesDao.findRecipeByID(rid)
        res.send(status)
    }

    const deleteRecipe = async (req, res) => {
        const rid = req.params['intRecipeID']
        const status = await recipesDao.deleteRecipe(rid)
        res.send(status)
    }

    app.post  ('/create-recipe', createRecipe)
    app.get   ('/recipes/:intRecipeID', findRecipeByID)
    app.put   ('/recipes/add-recommendation', addRecommendation)
    app.put   ('/recipes/remove-recommendation/:intRecipeID', removeRecommendation)
    app.delete('/recipes/:intRecipeID', deleteRecipe)
}

export default RecipesController;