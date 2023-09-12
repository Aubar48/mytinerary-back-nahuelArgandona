import User from "../../models/User.js";
import bcrypt from 'bcryptjs'
export default async (req, res, next) => {
    try {
        const existeMail = await User.findOne({ mail: req.body.mail })

        if (!existeMail) {
            const passwordHash = bcrypt.hashSync(req.body.password, 10)
            let body = { ...req.body }
            body.password = passwordHash
            let newUser = await User.create(body)
            return res.status(201).json({
                success: true,
                message: 'User created',
                response: newUser._id
            })
        } else {
            return res.status(400).json({
                success: false,
                message: 'User with this mail exist',
            })
        }
    } catch (error) {
        next(error)
    }
}