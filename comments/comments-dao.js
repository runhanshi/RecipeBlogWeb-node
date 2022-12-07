import commentsModel from "./comments-model.js";

export const createComment = (review) =>
    commentsModel.create(review)

export const findCommentsByRecipe = (recipeID) =>
    commentsModel
        .find({recipeID: recipeID})
        .populate('customer')
        .exec()

export const findCommentsByCustomer = (customer) =>
    commentsModel.find({customer})