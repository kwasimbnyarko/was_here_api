const express = require('express');
const app = express();

const user = require('./routes/user');
const event = require('./routes/event');

const connectDB = require('./db/connect');
require('dotenv').config();



app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/v1/users',user);
app.use('/api/v1/events',event)




const portNumber = 3000;


const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(portNumber,()=>{
            console.log(`Server is listening on port ${portNumber}`)
        });
    }catch (e){
        console.log(e);
    }
}


start();