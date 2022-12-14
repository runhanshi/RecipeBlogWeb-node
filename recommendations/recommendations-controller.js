import * as recommendationDao from "./recommendations-dao.js";

const RecommendationsController = (app) => {

    const gourmetRecommendsRecipe = async (req, res) => {
        console.log("gourmetRecommendsRecipe controller")
        const gid = req.params.gid
        const rid = req.params.rid
        const newRecommendation = await recommendationDao.gourmetRecommendsRecipe(gid, rid, new Date())
        res.json(newRecommendation)
    }

    const gourmetUnrecommendsRecipe = async (req, res) => {
        console.log("gourmetUnrecommendsRecipe controller")
        const gid = req.params.gid
        const rid = req.params.rid
        const unrecommendation = await recommendationDao.gourmetUnrecommendsRecipe(gid, rid)
        res.send(unrecommendation)
    }

    const findGourmetWhoRecommendsRecipe = async (req, res) => {
        console.log("findGourmetWhoRecommendsRecipe controller")
        const rid = req.params.rid
        const recipes = await recommendationDao.findGourmetWhoRecommendsRecipe(rid)
        res.json(recipes)
    }

    const findMostRecentTenRecommendedRecipes = async (req, res) => {
        console.log("findMostRecentTenRecommendedRecipes controller")
        const recommendations = await recommendationDao.findMostRecentTenRecommendedRecipes()
        res.json(recommendations)
    }

    app.post('/gourmets/:gid/recommends/:rid', gourmetRecommendsRecipe)
    app.delete('/gourmets/:gid/unrecommends/:rid', gourmetUnrecommendsRecipe)
    app.get('/recipes/:rid/recommends', findGourmetWhoRecommendsRecipe)
    app.get('/recentRecommendations', findMostRecentTenRecommendedRecipes)
}

export default RecommendationsController;