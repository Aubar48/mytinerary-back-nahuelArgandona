import Itinerary from './../../models/Itinerary.js';

export default async (req, res, next) => {
    try {
        let newItinerary = await Itinerary.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'Itinerary created',
            response: newItinerary._id
        })
    } catch (error) {
        next(error)
    }
}