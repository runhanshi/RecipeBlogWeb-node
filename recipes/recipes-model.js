import mongoose from "mongoose";
import recipesSchema from "./recipes-schema.js";

const recipesModel = mongoose.model('RecipesModel', recipesSchema)

export default recipesModel