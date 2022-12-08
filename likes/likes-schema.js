import mongoose from "mongoose";

const likesSchema = mongoose.Schema({
    customer: {type: mongoose.Schema.Types.ObjectId, ref: 'UserInfo'},
    recipe: {type: mongoose.Schema.Types.ObjectId, ref: 'recipes'},
    time: Date,
}, {collection: 'likes'})
export default likesSchema