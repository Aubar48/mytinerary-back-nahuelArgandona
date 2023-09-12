import Like from '../../models/Likes.js';
export default async (req, res, next) => {
    try {
        let like = await Like(req.body)
        return res.status(201).json({
            success: true,
            message: 'Like created',
            response: like._id
        })
    } catch (error) {
        next(error)
    }
}