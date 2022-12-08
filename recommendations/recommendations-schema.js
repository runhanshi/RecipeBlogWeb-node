import mongoose from "mongoose";

const recommendationsSchema = mongoose.Schema({
    gourmet: {type: mongoose.Schema.Types.ObjectId, ref: 'UserInfo'},
    recipe: {type: mongoose.Schema.Types.ObjectId, ref: 'RecipesModel'},
    time: Date,
}, {collection: 'recommendations'})
mongoose.model("recommendations", recommendationsSchema);
export default recommendationsSchema