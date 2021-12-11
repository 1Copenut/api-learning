import express from 'express';
const router = express.Router();
import indexController from '../controllers';
import { TEST_KEY } from '../constants';

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.send(await indexController(TEST_KEY));
});

export default router;
