const express = require('express');
const router = express.Router();
const routineController = require('../controllers/routineController');

router.post('/routines', routineController.createRoutine);
router.get('/routines/:id', routineController.getRoutine);
router.put('/routines/:id', routineController.updateRoutine);
router.delete('/routines/:id', routineController.deleteRoutine);

module.exports = router;
