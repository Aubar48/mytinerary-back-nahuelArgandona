import Itinerary from "../../models/Itinerary.js";
export default async (req, res, next) => {
    try {
        let updatedItinerary = await Itinerary.findByIdAndUpdate(
            req.params.u_id, // Assuming the ID is in req.params.u_id
            req.body,
            { new: true }
        ).select('itinerary_name description duration admin_id');

        if (updatedItinerary) {
            return res.status(200).json({
                success: true,
                message: 'itinerary updated',
                response: updatedItinerary
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            });
        }
    } catch (error) {
        next(error);
    }
};
