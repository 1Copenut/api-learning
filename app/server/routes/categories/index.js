import express from 'express';
const router = express.Router();
import categoriesController from '../../controllers/categories';
import { BASE_URL, EIA_KEY } from '../../constants';
import { errorObjApi } from '../../constants/errCodes';

/* GET users listing. */
router.get('/', async (req, res, next) => {
  /* FIXME: Add express-validator to prevent XSS */
  try {
    const categoryId = await req.query.category_id;
    const id = categoryId ?? '714755';
    const results = await categoriesController(
      BASE_URL,
      EIA_KEY,
      id
    );
    return res.send(results);
  } catch (err) {
    let errorObj = {};
    errorObj = Object.assign({ message: err.message }, errorObjApi);
    return res.status(500).json(errorObj);
  }
});

export default router;
