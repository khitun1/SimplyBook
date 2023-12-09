const express = require('express');
const router = express();
const PeriodController = require('../controllers/PeriodController');
const AuthMiddleware = require('../middleware/authMiddleware');

router.post('/create', AuthMiddleware, PeriodController.createPeriod);

module.exports = router;