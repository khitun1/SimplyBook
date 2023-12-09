const express = require("express");
const router = express();
const PlanController = require('../controllers/PlanPaymentController');
const AuthMiddleware = require('../middleware/authMiddleware');

router.post('/setPlan', AuthMiddleware, PlanController.setPlan);
router.post('/getPlan', AuthMiddleware, PlanController.getPlan);
router.get('/getInvoices', AuthMiddleware, PlanController.getInvoices);

module.exports = router;