export default (req, res, next) => {
    try {
    return res.status(200).json({
    response: { token: req.token, user: req.user },
    success: true,
    message: "User signin with google",
    });
    } catch (error) {
    next(error);
    }
    };
    