const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/usercontroller')

router.get("/",(req,res)=>{
    res.send('Welcome Buggers API is listening')
})

router.post("/api/v1/register",userCtrl.register)

module.exports = router;

