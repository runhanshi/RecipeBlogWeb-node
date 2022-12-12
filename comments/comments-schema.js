import mongoose from "mongoose";

const commentsSchema = mongoose.Schema({
    comment: String,
    recipeID: {type: mongoose.Schema.Types.ObjectId, ref: 'RecipesModel'},
    customer: {type: mongoose.Schema.Types.ObjectId, ref: 'UserInfo'}
}, {collection: 'comments'})
export default commentsSchema