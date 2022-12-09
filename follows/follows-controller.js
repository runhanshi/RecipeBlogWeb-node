import * as dao from './follows-dao.js'
import * as followsDao from "./follows-dao.js";
const FollowsController = (app) => {
    const followUser = async (req, res) => {
        const follow = req.body
        const currentUser = req.session['currentUser']
        follow.follower = currentUser._id
        const actualFollow = await dao.followUser(follow)
        res.json(actualFollow)
    }
    const findFollowers = async (req, res) => {
        const followed = req.params.followed
        const followers = await dao.findFollowers(followed)
        res.json(followers)
    }
    const findFollowing = async (req, res) => {
        const follower = req.params.follower
        const followed = await dao.findFollowing(follower)
        res.json(followed)
    }

    const customerFollowChef = async (req, res) => {
        const uid = req.params.uid
        const cid = req.params.cid
        const newfollow = await followsDao.customerFollowChef(uid, cid)
        res.json(newfollow)
    }

    const customerUnFollowChef = async (req, res) => {
        console.log("customerUnlikesRecipe controller")
        const uid = req.params.uid
        const cid = req.params.cid
        const unfollow = await followsDao.customerUnFollowChef(uid, cid)
        res.send(unfollow)
    }
    const findCustomersWhoFollowChef= async (req, res) => {
        console.log("findCustomersWhoFollowChef controller")
        const rid = req.params.rid
        const customers = await followsDao.findCustomersWhoFollowChef(rid)
        res.json(customers)
    }

    app.post('/follows/:uid/follow/:cid', customerFollowChef)
    app.delete('/follows/:uid/unfollow/:cid', customerUnFollowChef)
    // app.post('/follows', followUser)
    // app.get('/users/:followed/followers', findFollowers)
    // app.get('/users/:follower/following', findFollowing)
    app.get('/follows/:rid/follow', findCustomersWhoFollowChef)
}

export default FollowsController