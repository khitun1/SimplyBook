const express = require("express");
const router = express();
const ChildController = require('../controllers/ChildController');
const AuthMiddleware = require('../middleware/authMiddleware');

router.post('/getAll', AuthMiddleware, ChildController.getChildren);
router.post('/exclude', AuthMiddleware, ChildController.exclude);
router.post('/changeGroup', AuthMiddleware, ChildController.changeGroup);
router.post('/create', AuthMiddleware, ChildController.create);
router.get('/getBalance', AuthMiddleware, ChildController.getBalance);
router.get('/changeBalance', AuthMiddleware, ChildController.changeBalance);
router.get('/getForParent', AuthMiddleware, ChildController.getForParent);

module.exports = router;