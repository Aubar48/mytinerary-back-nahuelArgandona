import express from 'express';
let router = express.Router();
import create from '../controllers/itineraries/create.js';
import read from '../controllers/itineraries/read.js'
import readOne from '../controllers/itineraries/readOne.js';
import update from '../controllers/itineraries/update.js';
import destroy from '../controllers/itineraries/destroy.js';




//CREATE
router.post('/', create)

//READ
router.get('/', read)

router.get('/:id', readOne)

//UPDATE
router.put('/:u_id', update)

//DESTROY
router.delete('/:id', destroy)

export default router