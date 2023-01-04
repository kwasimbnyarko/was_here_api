const express = require('express');
const router = express.Router();
const { getAllEvents,createEvent,generateEventQR } = require('../controllers/event');


router.get('/',getAllEvents)
router.post('/',createEvent)
router.get("/code",generateEventQR)



module.exports = router;