import * as likesDao from "./likes-dao.js";

const LikesController = (app) => {

    const customerLikesRecipe = async (req, res) => {
        console.log("customerLikesRecipe controller")
        const cid = req.params.cid
        const rid = req.params.rid
        const newLike = await likesDao.customerLikesRecipe(cid, rid, new Date())
        res.json(newLike)
    }

    const customerUnlikesRecipe = async (req, res) => {
        console.log("customerUnlikesRecipe controller")
        const cid = req.params.cid
        const rid = req.params.rid
        const unlike = await likesDao.customerUnlikesRecipe(cid, rid)
        res.send(unlike)
    }

    const findMostRecentTenLikedRecipes = async (req, res) => {
        console.log("findMostRecentTenLikedRecipes controller")
        const likes = await likesDao.findAllLikes()
        res.json(likes)
    }

    const findRecipesLikedByCustomer = async (req, res) => {
        console.log("findRecipesLikedByCustomer controller")
        const cid = req.params.cid
        const recipes = await likesDao.findRecipesLikedByCustomer(cid)
        res.json(recipes)
    }

    const findCustomersWhoLikeRecipe = async (req, res) => {
        console.log("findCustomersWhoLikeRecipe controller")
        const rid = req.params.rid
        const customers = await likesDao.findCustomersWhoLikeRecipe(rid)
        res.json(customers)
    }

    app.post('/customers/:cid/likes/:rid', customerLikesRecipe)
    app.delete('/customers/:cid/unlikes/:rid', customerUnlikesRecipe)
    app.get('/recentLikes', findMostRecentTenLikedRecipes)
    app.get('/customers/:cid/likes', findRecipesLikedByCustomer)
    app.get('/recipes/:rid/likes', findCustomersWhoLikeRecipe)
}

export default LikesController;