import Itinerary from './../../models/Itinerary.js';
import City from './../../models/City.js';
export default async (req, res, next) => {
    try {
        let city = await City.findOne({ city: req.params.city })
        console.log(req.params.city);
        let objetoDeBusqueda = { city_id: city._id };
        let objetoDeOrdenamiento = {};

        if (req.query.city_id) {
            objetoDeBusqueda.city_id = req.query.city_id;
        }
        if (req.query.itinerary) {
            objetoDeBusqueda.itinerary = new RegExp(req.query.itinerary, 'i');
        }
        if (req.query.sort) {
            objetoDeOrdenamiento.itinerary = req.query.sort;
        }

        let allItineraries = await Itinerary
            .find(objetoDeBusqueda, 'name price duration tags photo city_id')
            .populate('city_id', 'country fundation population photo city description smalldescription featuredLocation -_id')
            .sort(objetoDeOrdenamiento);

        if (allItineraries.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'itineraries found',
                response: allItineraries
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'itineraries not found',
                response: null
            });
        }
    } catch (error) {
        next(error);
    }
};
