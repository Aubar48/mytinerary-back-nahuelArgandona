import express from 'express';
let router = express.Router();

import create from '../controllers/activities/create.js';
import read from '../controllers/activities/read.js'
import readByItinerary from '../controllers/activities/readByItinerary.js';
import readOne from '../controllers/activities/readOne.js';
import update from '../controllers/activities/update.js';
import destroy from '../controllers/activities/destroy.js';

//CREATE
router.post('/', create)

//READ
router.get('/', read)
router.get('/itinerary/:itinerary', readByItinerary);
router.get('/:id', readOne)


//UPDATE
router.put('/:u_id', update)

//DESTROY
router.delete('/:id', destroy)

export default router