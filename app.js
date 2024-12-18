import express from 'express';
import {PORT} from './app/config/config.js'
import router from './app/routes/api.js'
import { DATABASE,MAX_JSON_SIZE,URL_ENCODED} from './app/config/config.js';
import mongoose from 'mongoose';

const app=express();
app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({ extended: URL_ENCODED}));

// Database Connect
mongoose.connect(DATABASE,{autoIndex:true}).then(()=>{
    console.log("MongoDB connected");
}).catch(()=>{
    console.log("MongoDB disconnected");
})
app.use("/api",router);

app.listen(PORT,()=>{
    console.log(`app running on  port ${PORT}`)
})