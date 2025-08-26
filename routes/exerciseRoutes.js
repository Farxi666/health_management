const express = require('express');
const { addExercise, getUserExercises } = require('../controllers/exerciseController');
const router = express.Router();

router.post('/exercises', addExercise);
router.get('/exercises/:userId', getUserExercises);

module.exports = router;
