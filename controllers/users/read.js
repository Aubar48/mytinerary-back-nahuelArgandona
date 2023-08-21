import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        const allUsers = await User.find()
        return res.status(200).json({
            success: true,
            message: 'User found',
            response: allUsers
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'Not found',
            response: null
        })
    }
}