import likesModel from "./likes-model.js";

export const customerLikesRecipe = async (cid, rid, time) => {
    return await likesModel.create({customer: cid, recipe: rid, time: time})
}
export const customerUnlikesRecipe = async(cid, rid) => {
    return await likesModel.deleteOne({customer: cid, recipe: rid})
}
export const findRecipesLikedByCustomer = async(cid) => {
    return await likesModel
        .find({customer: cid}, {customer: false})
        .populate('recipe')
        .exec()
}
export const findCustomersWhoLikeRecipe = async(rid) => {
    return await likesModel.find({recipe: rid}, {recipe: false})
        .populate('customer', '_id')
        .exec()
}

export const findMostRecentTenLikedRecipes = async() => {
    return await likesModel.find(
    )
        .populate('recipes', '_id')
        .exec()
}