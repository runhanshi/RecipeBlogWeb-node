import mongoose from "mongoose";

const recommendationsSchema = mongoose.Schema({
    gourmet: {type: mongoose.Schema.Types.ObjectId, ref: 'UserInfo'},
    recipe: {type: mongoose.Schema.Types.ObjectId, ref: 'recipes'},
    time: Date,
}, {collection: 'recommendations'})
export default recommendationsSchema