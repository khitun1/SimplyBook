const express = require("express");
const router = express();
const PaymentController = require('../controllers/PaymentController');
const AuthMiddleware = require('../middleware/authMiddleware');

router.post('/getPayments', AuthMiddleware, PaymentController.getPayments);
router.post('/setPayment', AuthMiddleware, PaymentController.setPayment);

module.exports = router;