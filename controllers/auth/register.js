import User from "../../models/User.js";
import jwt from 'jsonwebtoken'
export default async (req, res, next) => {
    try {
        // Crea un nuevo usuario
        let one = await User.create(req.body);

        // Genera un token JWT para el nuevo usuario
        const token = jwt.sign({ userId: one._id }, 'tu_secreto_secreto', { expiresIn: '1h' }); // Cambia 'tu_secreto_secreto' por una clave secreta fuerte

        return res.status(201).json({
            success: true,
            message: 'User Registered',
            response: {
                user: one._id,
                token: token
            }
        });
    } catch (error) {
        next(error);
    }
}

