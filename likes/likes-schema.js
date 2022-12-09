import mongoose from "mongoose";

const likesSchema = mongoose.Schema({
    customer: {type: mongoose.Schema.Types.ObjectId, ref: 'UserInfo'},
    recipe: {type: mongoose.Schema.Types.ObjectId, ref: 'RecipesModel'},
    time: Date,
}, {collection: 'likes'})
mongoose.model("likes", likesSchema);
export default likesSchema