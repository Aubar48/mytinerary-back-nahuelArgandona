import City from "../../models/City.js";

export default async (req, res, next) => {
    console.log(req.params);
    try {
        let one = await City.findOne({ city: req.params.id })
        if (one) {
            return res.status(200).json({
                success: true,
                message: 'city found',
                response: one
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}