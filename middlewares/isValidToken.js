import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    try {
        let token = jwt.sign(
            { mail: req.user.mail },
            process.env.SECRET_KEY,
            { expiresIn: 60 * 60 * 24 * 7 * 4 }
        )
        req.token = token
        return next()
    } catch (error) {
        return next(error)
    }
}