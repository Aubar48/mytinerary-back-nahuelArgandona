export default function (req, res, next) {
    return res.status(404).json({
        success: false,
        message: 'not found ' + req.method + ' ' + req.url,
        response: null
    })
}