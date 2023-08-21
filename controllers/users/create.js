import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        const newUser = await User.create(req.body)
        return res.status(201).json({
            succes: true,
            message: 'User created',
            response: newUser._id
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Error user exist',
            response: null
        })
    }
}