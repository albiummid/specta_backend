const { addFeature, getAllFeatures } = require('../controller/feature.controller');

const router = require('express').Router();

router.route('/addFeature').post(addFeature);
router.route('/features').get(getAllFeatures);


module.exports = router