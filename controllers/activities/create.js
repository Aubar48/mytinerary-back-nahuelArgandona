
import Activity from './../../models/Activity.js';

export default async (req, res, next) => {
    try {
        let newActivity = await Activity.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'Activity created',
            response: newActivity._id
        })
    } catch (error) {
        next(error)
    }
}