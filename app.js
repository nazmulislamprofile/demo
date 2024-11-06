import express, { urlencoded } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import helmet from "helmet";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import router from "./routes/api.js"
import {MONGODB_CONNECTION,PORT,MAX_JSON_SIZE,URL_ENCODED,WEB_CACHE,REQUEST_LIMIT_NUMBER,REQUEST_LIMIT_TIME} from "./app/config/config.js"
import fileUpload from 'express-fileupload'

const app=express();

//Global application midleware

app.use(cors());
app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({extended:URL_ENCODED}));
app.use(hpp());
app.use(helmet())
app.use(cookieParser())

app.use(fileUpload({
    limit:{fileSize:50*1024*1024}
}))


//rate limiter

const limiter=rateLimit({windowMs:REQUEST_LIMIT_TIME,max:REQUEST_LIMIT_NUMBER});
app.use(limiter);


//mongodb connection

mongoose.connect(MONGODB_CONNECTION,{autoIndex:true}).then(()=>{
    console.log("connected to mongoDb");
}).catch(err=>{
    console.log("error connecting to mongoDb")
})

//set api routes

app.use("/api",router);

//set application storage

app.use(express.static('storage'))



app.listen(PORT,()=>{
    console.log(`app running on  port ${PORT}`)
})