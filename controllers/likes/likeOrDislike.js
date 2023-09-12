import Like from "../../models/Like.js";

export default async (req, res, next) => {
  try {
    if (req.isLiked) {
        await Like.findOneAndDelete(req.body)
        return res.status(200).json({
            success: true,
            message: "like destroyed",
            response: null,
          });
    } else {
        let like = await Like.create(req.body);
        return res.status(201).json({
          success: true,
          message: "like created",
          response: like,
        });
    }
  } catch (error) {
    next(error);
  }
};