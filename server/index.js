const express = require('express');


const app = express();
app.use(express.json())
app.use(require('./router/userSign'))

require('./config/connection')
app.listen(5000,()=>{
    console.log('5000 port is running')
})