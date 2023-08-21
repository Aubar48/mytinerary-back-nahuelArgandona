import express from 'express'; 
const router = express.Router();

import create from '../controllers/users/create.js'
import read from '../controllers/users/read.js'
import readOne from '../controllers/users/readOne.js'
import update from '../controllers/users/update.js'
import destroy from '../controllers/users/destroy.js'

router.post('/', create); // Ruta para crear un usuario
router.get('/', read); // Ruta para obtener todos los usuarios
router.get('/:id', readOne); // Ruta para obtener un usuario por su ID
router.put('/:id', update); // Ruta para actualizar un usuario por su ID
router.delete('/:id', destroy); // Ruta para eliminar un usuario por su ID

export default router;
