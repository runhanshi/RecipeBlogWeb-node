import recipesModel from "./recipes-model.js";

export const createRecipe = async (recipe) => {
    return await recipesModel.create(recipe)
}

export const addRecommendation = async (recommendation) => {
    console.log(recommendation.rid)
    return recipesModel.updateOne({_id: recommendation.rid},
        { $set: recommendation}
    );
}

export const removeRecommendation = async (rid) => {
    return recipesModel.findOneAndUpdate({_id: rid},
        {
            recommendedByID: "",
            recommendedByName: ""
        }
    );
}

export const deleteRecipe = async (rid) => {
    return recipesModel.deleteOne({_id: rid});
}

export const findRecipeByID = async (rid) => {
    const recipe = await recipesModel.findOne({_id: rid})
    return recipe
}

export const findAllRecipes = async () => {

}