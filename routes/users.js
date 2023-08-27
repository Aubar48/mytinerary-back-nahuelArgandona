import express from 'express';
let router = express.Router();
import create from '../controllers/users/create.js';
import read from '../controllers/users/read.js'
import readOne from '../controllers/users/readOne.js';
import update from '../controllers/users/update.js';
import destroy from '../controllers/users/destroy.js';



router.post('/register', create)
router.get('/', read)
router.get('/:user_id', readOne)
router.put('/:u_id', update)
router.delete('/:id', destroy)

export default router
