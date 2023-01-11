const express = require('express');
const router = express.Router();

const {getAllUsers,createUser, getUserWithMacAddress} = require('../controllers/user')


router.get('/',getAllUsers);
router.get('/:address',getUserWithMacAddress)

router.post('/',createUser)


module.exports = router;