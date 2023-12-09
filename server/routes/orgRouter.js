const express = require("express");
const router = express();
const OrgController = require('../controllers/OrganizationController');
const AuthMiddleware = require('../middleware/authMiddleware');

router.post('/create', AuthMiddleware, OrgController.create);
router.post('/changeRequesites', AuthMiddleware, OrgController.changeRequisites);
router.get('/getOne', AuthMiddleware, OrgController.getOrganization);
router.get('/getAll', AuthMiddleware, OrgController.getOrganizations);
router.post('/getForChild', AuthMiddleware, OrgController.getOrganizationsForChild);

module.exports = router;