import Activity from "../../models/Activity.js";

export default async (req, res, next) => {
    try {
        let updatedActivity = await Activity.findByIdAndUpdate(
            req.params.u_id, // Assuming the ID is in req.params.u_id
            req.body,
            { new: true }
        ).select('name photo mail'); // Update field names as needed

        if (updatedActivity) {
            return res.status(200).json({
                success: true,
                message: 'Activity updated',
                response: updatedActivity
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
