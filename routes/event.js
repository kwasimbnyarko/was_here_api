const express = require('express');
const router = express.Router();
const { getAllEvents,createEvent,generateEventQR,markEventAttendance } = require('../controllers/event');


router.get('/',getAllEvents);
router.post('/',createEvent);
router.get("/code",generateEventQR);
router.put('/attendance',markEventAttendance);



module.exports = router;