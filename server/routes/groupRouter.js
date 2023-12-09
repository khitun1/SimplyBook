const express = require("express");
const router = express();
const GroupController = require('../controllers/GroupController');
const AuthMiddleware = require('../middleware/authMiddleware');

router.post('/create', AuthMiddleware, GroupController.create);
router.delete('/delete', AuthMiddleware, GroupController.delGroup);
router.post('/changeTeachers', AuthMiddleware, GroupController.changeTeachers);
router.post('/getAll', AuthMiddleware, GroupController.getGroups);
router.get('/getAllForTeacher', AuthMiddleware, GroupController.getGroupsForTeacher);


module.exports = router;