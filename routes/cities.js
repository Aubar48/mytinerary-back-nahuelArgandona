import express from 'express';
let router = express.Router();
import create from '../controllers/cities/create.js';
import read from '../controllers/cities/read.js'
import readOne from '../controllers/cities/readOne.js';
import update from '../controllers/cities/update.js';
import destroy from '../controllers/cities/destroy.js';
import carousel from '../controllers/cities/carousel.js';



//CREATE
router.post('/', create)

//READ
router.get('/', read)
router.get('/carousel', carousel)
router.get('/:id', readOne)

//UPDATE
router.put('/:u_id', update)

//DESTROY
router.delete('/:id', destroy)

export default router