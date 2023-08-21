import express from 'express';
import create from '../controllers/users/create.js';
import read from '../controllers/users/read.js'
import readOne from '../controllers/users/readOne.js';
import update from '../controllers/users/update.js';
import destroy from '../controllers/users/destroy.js';

let router = express.Router();

router.post('/', create)
router.get('/', read)
router.get('/:user_id', readOne)
router.put('/:u_id', update)
router.delete('/:id', destroy)

export default router
