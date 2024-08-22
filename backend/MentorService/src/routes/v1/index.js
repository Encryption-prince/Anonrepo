const express =require('express');

//const {FlightMiddlewares} = require('../../middlewares/index');

const MentorController = require('../../controllers/mentor-controller');

const router = express.Router();

router.post('/mentor',MentorController.create);
//router.delete('/city/:id',CityController.destroy);
router.get('/mentor/:id',MentorController.get);
router.get('/mentor', MentorController.getAll);

module.exports = router;