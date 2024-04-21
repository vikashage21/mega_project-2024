// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
dotenv.config({
    path:'./env'
})




import connectDB from "./db/index.js";



connectDB().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server listening on ${process.env.PORT}`);
    })
}).catch((err)=>{

    console.log ('mongo db connection error: ' + err)

})














// conneting form database 
// import express from "express";

// const app = express();

// ( async ()=>{

//     try {

//   await mongoose.connect (`${process.env.MONGODB_URL}/${DB_NAME}`)

//   app.on("error", (error)=>{
//     console.log('application not talk to databse')
//     throw error
//   })

//   app.listen(process.env.PORT || 3000, ()=>{
//     console.log(    `server is running on port${process.env.PORT}` )
//   })

        
//     } catch (error) {
//         console.error("error", error);
//         throw err
        
//     }

// })()