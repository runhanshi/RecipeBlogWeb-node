import recipesModel from "./recipes-model.js";

export const createRecipe = async (recipe) => {
    return await recipesModel.create(recipe)
}

export const deleteRecipe = async (rid) => {
    return await recipesModel.deleteOne({_id: rid})
}

export const findRecipeByID = async (rid) => {
    const recipe = await recipesModel.findOne({_id: rid})
    return recipe
}

export const findAllRecipes = async () => {

}