import * as dao from "./comments-dao.js"

const CommentsController = (app) => {
    const createComment = async (req, res) => {
        const comment = req.body
        const currentUser = req.session['currentUser']
        comment.customer = currentUser._id
        const newComment = await dao.createComment(comment)
        res.json(newComment)
    }
    const findCommentByRecipe = async (req, res) => {
        const rid = req.params.rid
        const comments = await dao.findCommentsByRecipe(rid)
        res.json(comments)
    }
    const findCommentByCustomer = async (req, res) => {
        const cid = req.params.cid
        const comments = await dao.findCommentsByCustomer(cid)
        res.json(comments)
    }
    app.post('/comments', createComment)
    app.get('/recipes/:rid/comments', findCommentByRecipe)
    app.get('/customers/:cid/comments', findCommentByCustomer)
}
export default CommentsController