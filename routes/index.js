const Router = express.Router();
import express from 'express';

import userRouter from './users.js';
import itinerayRouter from './itineraries.js';
import activityRouter from './activities.js'

Router.get('/', (req, res, next) => {
  res.render('index', { title: 'index' })
})

Router.use('/users', userRouter)

Router.use('/itineraries', itinerayRouter)

Router.use('/activities', activityRouter)

export default Router
