import express from 'express';
const router = express.Router();
import seriesController from '../../controllers/series';
import { BASE_URL, EIA_KEY } from '../../constants';
import { errorObjApi } from '../../constants/errCodes';

/* GET users listing. */
router.get('/', async (req, res, next) => {
  /* FIXME: Add express-validator to prevent XSS */
  try {
    const seriesId = await req.query.series_id;
    const id = seriesId ?? 'PET.W_EPM0F_YPY_R10_MBBLD.4';
    console.log(id);
    const results = await seriesController(
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
