const express = require("express");
const router = express();
const VisitController = require('../controllers/VisitController');
const AuthMiddleware = require('../middleware/authMiddleware');

router.post('/setVisit', AuthMiddleware, VisitController.setVisit);
router.get('/getVisits', AuthMiddleware, VisitController.getVisits);

module.exports = router;