import usersModel from "./users-model.js";
import recipesModel from "../recipes/recipes-model.js";
import recommendationsModel from "../recommendations/recommendations-model.js";
import likesModel from "../likes/likes-model.js";
import commentsModel from "../comments/comments-model.js";

export const createUser = async (user) =>
    await usersModel.create(user)

export const findRecipesByUserId = async (id) =>
    await recipesModel.find({
        chefID: id
    })

export const findUserByUsername = async (username) =>
    await usersModel.findOne({
        username
    })

export const findRecommendsByUserId = async (id) =>
    await recommendationsModel.find({
        gourmet: id
    }). populate('recipe', ['_id', 'name', 'picture']);

export const findLikesByUserId = async (id) =>
    await likesModel.find({
        customer: id
    }). populate('recipe', ['_id', 'name', 'picture']);


export const findUserByCredentials = async (username, password) =>
    await usersModel.findOne({username, password})

export const findAllUsers = async () =>
    await usersModel.find()

export const deleteUser = async (uid) =>
    await usersModel.deleteOne({_id: uid})

export const updateUser = async (uid, userUpdates) =>
    await usersModel.findOneAndUpdate({_id: uid},
        {$set: userUpdates},{new:true})

export const findUserById = (uid) =>
    usersModel.findOne({_id:uid}, {password: false})


