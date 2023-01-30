const { getFooter } = require('../controller/footer.controller');

const router = require('express').Router();


router.route('/footer').get(getFooter);


module.exports = router