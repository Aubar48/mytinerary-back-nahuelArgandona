import Like from "../models/Like.js";

export default async (req, res, next) => {
    req.body.user_id = req.user._id
    let one = await Like.findOne(req.body) 
    if (one) {
        req.isLiked = true
    } else {
        req.isLiked = false
    }
    return next()
}