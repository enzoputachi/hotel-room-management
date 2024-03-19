const express = require('express');
const router = express.Router();
const roomTypeController = require('../controllers/roomTypeController');
const { validateRequest } = require('../middlewares/validation');

router.post('/', validateRequest, roomTypeController.createRoomType);
router.get('/', roomTypeController.getAllRoomTypes);

module.exports = router;