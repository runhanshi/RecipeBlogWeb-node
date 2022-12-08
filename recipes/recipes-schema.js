import mongoose from "mongoose";

const recipesSchema = mongoose.Schema({
    name: {type: String, required: true},
    chefID: String,
    chef: String,
    extID: String,
    category: String,
    picture: String,
    ingredients: [[]],
    recommendedByID: String,
    recommendedByName: String,
    createTime: Date,
    instructions: String,
}, {collection: 'recipes'})

export default recipesSchema