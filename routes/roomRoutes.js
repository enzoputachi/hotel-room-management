const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');
const { validateRequest } = require('../middlewares/validation');

// Routes
router.post('/', validateRequest, roomController.createRoom);
router.get('/', roomController.getAllRooms);
router.get('/:roomId', roomController.getRoomById);
router.patch('/:roomId', validateRequest, roomController.updateRoom);
router.delete('/:roomId', roomController.deleteRoom);

module.exports = router;