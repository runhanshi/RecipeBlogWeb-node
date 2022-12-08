import mongoose from "mongoose";
import recommendationsSchema from "./recommendations-schema.js";

const recommendationsModel = mongoose.model('RecommendationsModel', recommendationsSchema)

export default recommendationsModel