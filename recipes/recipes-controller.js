import * as recipesDao from "./recipes-dao.js";

const RecipesController = (app) => {

    const createRecipe   = async (req, res) => {
        const recipe = req.body
        const newRecipe = await recipesDao.createRecipe(recipe)
        res.send(newRecipe)
    }

    app.post  ('/create-recipe', createRecipe)
    // app.get   ('/movies', findAllMovies)
    // app.put   ('/movies/:mid', updateMovie)
    // app.delete('/movies/:mid', deleteMovie)
}

export default RecipesController;