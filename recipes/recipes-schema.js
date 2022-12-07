import mongoose from "mongoose";

const recipesSchema = mongoose.Schema({
    name: {type: String, required: true},
    chefID: String,
    extID: String,
    category: String,
    picture: String,
    ingredients: [[]],
    recommendedBy: String,
    createTime: Date,
    instructions: String,
}, {collection: 'recipes'})

export default recipesSchema