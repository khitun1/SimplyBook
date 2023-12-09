const express = require("express");
const router = express();
const UserController = require('../controllers/UserController');
const AuthMiddleware = require('../middleware/authMiddleware');

router.post('/login', UserController.signIn);
router.post('/signUp', UserController.signUp);
router.get('/auth', AuthMiddleware,  UserController.auth);
router.post('/create', AuthMiddleware, UserController.create);
router.post('/exclude', AuthMiddleware, UserController.exclude);
router.post('/getAll', AuthMiddleware, UserController.getTeachers);
router.post('/getClients', AuthMiddleware, UserController.getClients);

module.exports = router;