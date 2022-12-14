import recipesModel from "./recipes-model.js";
import likesModel from "../likes/likes-model.js";
import commentsModel from "../comments/comments-model.js";
import recommendationsModel from "../recommendations/recommendations-model.js";

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
    const result = await likesModel.deleteMany({recipe: rid})
            .then(await commentsModel.deleteMany({recipeID: rid}))
            .then(await recommendationsModel.deleteMany({recipe: rid}))
            .then(await recipesModel.deleteOne({_id: rid}));
    console.log(result)
    return result;
}

export const findRecipeByID = async (rid) => {
    const recipe = await recipesModel.findOne({_id: rid})
    return recipe
}

export const findIntRecipeBySearchKey = async (key) => {
    const recipes = await recipesModel.find({name: { $regex: '.*' + key + '.*' , $options:'i'}})
    return recipes
}

export const findTenMostRecentlyCreatedRecipe = async () => {
    const recipes = await recipesModel.find({}, ["_id", "name", "picture"])
        .sort({createTime: -1})
        .limit(8)
        .exec();
    return recipes
}

export const findIfRecipeExists = async (ext_rid) => {
    console.log(ext_rid)
    const recipe = await recipesModel.findOne({extID: ext_rid})
    return recipe
}