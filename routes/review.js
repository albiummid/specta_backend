const { addReview, getAllReviews } = require('../controller/review.controller');

const router = require('express').Router();

router.route('/addReview').post(addReview);
router.route('/reviews').get(getAllReviews);


module.exports = router