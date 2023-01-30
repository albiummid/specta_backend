const { addAdmin, getAdmin } = require('../controller/admin.controller');

const router = require('express').Router();

router.route('/addAdmin').post(addAdmin);
router.route('/isAdmin').get(getAdmin);

module.exports = router