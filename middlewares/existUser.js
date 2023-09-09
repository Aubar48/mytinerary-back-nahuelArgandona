import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        let one = await User.findOne({ mail: req.body.mail });
        if (one) {
            return res.status(400).json({
                success: false,
                message: "user has been registered",
                response: one._id,
            });
        } else {
            return next();
        }
    } catch (error) {
        return next(error);
    }
};