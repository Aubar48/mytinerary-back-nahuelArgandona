import Activity from "../../models/Activity.js";
import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
    try {
        let itinerary = await Itinerary.findOne({ nameI: req.params.name })
        console.log(req.params.itinerary);
        let objetoDeBusqueda = { itinerary_id: itinerary._id };
        let objetoDeOrdenamiento = {};

        if (req.query.itinerary_id) {
            objetoDeBusqueda.itinerary_id = req.query.itinerary_id;
        }
        if (req.query.activity) {
            objetoDeBusqueda.activity = new RegExp(req.query.activity, 'i');
        }
        if (req.query.sort) {
            objetoDeOrdenamiento.activity = req.query.sort;
        }

        let allActivities = await Activity
            .find(objetoDeBusqueda, 'name photo itinerary_id')
            .populate('itinerary_id', 'name price duration tags photo -_id')
            .sort(objetoDeOrdenamiento);

        if (allActivities.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Activity found',
                response: allActivities
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'Activity not found',
                response: null
            });
        }
    } catch (error) {
        next(error);
    }
};
