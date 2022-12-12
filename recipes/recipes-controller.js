import * as recipesDao from "./recipes-dao.js";
import {findIfRecipeExists} from "./recipes-dao.js";

const RecipesController = (app) => {

    const createRecipe = async (req, res) => {
        console.log("createRecipe controller")
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
        console.log("findRecipeByID controller")
        const rid = req.params['intRecipeID']
        const status = await recipesDao.findRecipeByID(rid)
        res.send(status)
    }

    const deleteRecipe = async (req, res) => {
        console.log("deleteRecipe controller")
        const rid = req.params['intRecipeID']
        const status = await recipesDao.deleteRecipe(rid)
        res.send(status)
    }

    const findIntRecipeBySearchKey = async (req, res) => {
        console.log("findIntRecipeBySearchKey controller")
        const key = req.query.s
        const recipes = await recipesDao.findIntRecipeBySearchKey(key)
        res.send(recipes)
    }

    const findTenMostRecentlyCreatedRecipe = async (req, res) => {
        console.log("findTenMostRecentlyCreatedRecipe controller")
        const recipes = await recipesDao.findTenMostRecentlyCreatedRecipe()
        res.send(recipes)
    }

    const findIfRecipeExists = async (req, res) => {
        console.log("findIfRecipeExists controller")
        const ext_rid = req.params['ExtRecipeID']
        const existence = await recipesDao.findIfRecipeExists(ext_rid)
        const result = {}
        if (existence) {
            result.existence = true
        } else {
            result.existence = false
        }
        res.send(result)
    }

    app.post  ('/create-recipe', createRecipe)
    app.get   ('/recipes/:intRecipeID', findRecipeByID)
    app.get   ('/recipes-search', findIntRecipeBySearchKey)
    app.get   ('/recentCreation', findTenMostRecentlyCreatedRecipe)
    app.get   ('/recipe-exist/:ExtRecipeID', findIfRecipeExists)
    app.put   ('/recipes/add-recommendation', addRecommendation)
    app.put   ('/recipes/remove-recommendation/:intRecipeID', removeRecommendation)
    app.delete('/recipes/:intRecipeID', deleteRecipe)
}



export default RecipesController;