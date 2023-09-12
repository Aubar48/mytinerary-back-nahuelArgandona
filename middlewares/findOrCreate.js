import User from "../models/User.js"
import bcrypt from "bcrypt";

export default async (req, res, next) => {
    try {
        let user = await User.findOne({ mail: req.user.mail });
        if (!user) {
            req.user.password = bcrypt.hashSync(req.body.token_google, 10)
            user = await User.create(req.user);
        }
        return next();
    } catch (error) {
        next(error);
    }
};
