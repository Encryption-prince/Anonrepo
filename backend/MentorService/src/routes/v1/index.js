const express =require('express');

//const {FlightMiddlewares} = require('../../middlewares/index');

const MentorController = require('../../controllers/mentor-controller');
const MenteeController = require('../../controllers/mentee-controller');
const router = express.Router();

router.post('/mentor',MentorController.create);
router.delete('/mentor/:id',MentorController.destroy);
router.get('/mentor/:id',MentorController.get);
router.get('/mentor', MentorController.getAll);

router.post('/mentee',MenteeController.create);
router.delete('/mentee/:id',MenteeController.destroy);
router.get('/mentee/:id',MenteeController.get);
router.patch('/mentee/:id',MenteeController.update);
router.get('/mentee', MenteeController.getAll);

module.exports = router;