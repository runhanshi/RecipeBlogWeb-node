import followsModel from "./follows-model.js";
import likesModel from "../likes/likes-model.js";

export const customerFollowChef = async (uid, cid) => {
    return await followsModel.create({followed: uid, follower: cid})
}

export const customerUnFollowChef = async(uid, cid) => {
    return await followsModel.deleteOne({followed: uid, follower: cid})
}

export const findFollowers = (followed) =>
    followsModel.find({followed})
        .populate('follower')
        .exec()

export const findFollowing = (follower) =>
    followsModel.find({follower})
        .populate('followed')
        .exec()

export const findCustomersWhoFollowChef = async(rid) => {
    return await followsModel.find({followed: rid})
        .populate('follower', '_id').exec();

}