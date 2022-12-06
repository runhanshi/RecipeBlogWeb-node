import recipesModel from "./recipes-model.js";

export const createRecipe = async (recipe) => {
    const newRecipe = await recipesModel.create(recipe)
    return newRecipe
}

export const findAllRecipes = async () => {

}