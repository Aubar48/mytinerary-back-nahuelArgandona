import Activity from "../../models/Activity.js";

export default async (req, res, next) => {
    console.log(req.params);
    try {
        let one = await Activity.findOne({ _id: req.params.id });
        if (one) {
            return res.status(200).json({
                success: true,
                message: 'Activity found',
                response: one
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
