import express from 'express';
const router = express.Router();
import { MyTinerary } from '../MyTinerary.js'

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req);
  res.json({
    data:MyTinerary,
    success:true
  })
});

export default router;
