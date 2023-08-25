import Itinerary from './../../models/Itinerary.js';

export default async (req, res, next) => {
    console.log(req.params);
    try {
        let one = await Itinerary.findOne({city:req.params.id})
        if (one) {
            return res.status(200).json({
                success: true,
                message: 'Itinerary found',
                response: one
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'Itinerary not found',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}