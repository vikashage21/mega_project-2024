import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

// using or cross origin middleware

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
))

// accepting the json for your application
app.use(express.json({

    limit: "16kb"
}))

// using middleware for encoding the url parameters


app.use(urlencoded({
    extended: true,
    limit: "16kb",
}))

// want to stroe files and folders 

app.use(express.static('public'))

// for handling cookies

app.use(cookieParser())



export { app }