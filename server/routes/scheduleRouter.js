const express = require("express");
const router = express();
const ScheduleController = require('../controllers/ScheduleController');
const AuthMiddleware = require('../middleware/authMiddleware');

router.post('/getSchedule', AuthMiddleware, ScheduleController.getSchedule);
router.post('/setSchedule', AuthMiddleware, ScheduleController.setSchedule);
router.post('/getForChild', AuthMiddleware, ScheduleController.getScheduleForChild);


module.exports = router;