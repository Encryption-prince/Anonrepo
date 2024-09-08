const express =require('express');

//const {FlightMiddlewares} = require('../../middlewares/index');

const BookingController = require('../../controllers/booking-controller');
//const MenteeController = require('../../controllers/mentee-controller');
const router = express.Router();

router.post('/booking',BookingController.create);
router.delete('/booking/:id',BookingController.destroy);
router.get('booking/:id',BookingController.get);
router.get('/booking', BookingController.getAll);


module.exports = router;