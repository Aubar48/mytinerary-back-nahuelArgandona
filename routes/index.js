import express from 'express';
const indexRouter = express.Router();
import { MyTinerary } from '../MyTinerary.js'

/* GET home page. */
indexRouter.get('/cities',) //getAll
  .get('/cities/:id',) //getuOne
  .post('/cities',) //createOne
  .put('/cities/:id',) //changesOne
  .delete('/cities/:id') //deleteOne
export default indexRouter

