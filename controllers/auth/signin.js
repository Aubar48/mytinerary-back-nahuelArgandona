export default (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "user logged in",
            response: {
                token: req.token,
                user: req.user,
            },
        });
    } catch (error) {
        next(error);
    }
};