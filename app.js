import express from 'express';
import {PORT} from './app/config/config.js'
import router from './app/routes/api.js'

const app=express();

app.use("/api",router);

app.listen(PORT,()=>{
    console.log(`app running on  port ${PORT}`)
})