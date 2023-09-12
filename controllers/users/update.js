import User from "../../models/User.js";

export default async (req, res) => {
    try {
        let updatedUser = await User.findOneAndUpdate(
            { mail: req.user.mail },
            req.body,
            { new: true }
        ).select("-_id -__v -password");
        return res.status(200).json({
            success: true,
            message: "user updated",
            response: updatedUser,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "not updated",
            response: null,
        });
    }
};