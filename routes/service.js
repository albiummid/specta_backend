
const seviceController = require('../controller/service.controller');

const router = require('express').Router();

router.route('/addService').post(seviceController.addService);
router.route('/services').get(seviceController.getAllServices);
router.route('/serviceById/:id').get(seviceController.getServiceById);


module.exports = router