import mongoose from "mongoose";

const recipesSchema = mongoose.Schema({
    name: {type: String, required: true},
    chef: {type: String, required: true},
    category: String,
    picture: String,
    ingredients: [],
    measures: [],
}, {collection: 'recipes'})

export default recipesSchema