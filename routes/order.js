const { addOrder, deleteOrder, updateOrder, orderByEmail, getAllOrders } = require('../controller/order.controller');

const router = require('express').Router();

router.route('/addOrder').post(addOrder);
router.route('/deleteOrder/:id').delete(deleteOrder);
router.route('/updateOrder/:id').patch(updateOrder);
router.route('/orderByEmail').get(orderByEmail);
router.route('/allOrders').get(getAllOrders);


module.exports = router