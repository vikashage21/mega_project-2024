import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async () => {

    try {

      const connetionInsatance=  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

      console.log(`\n MongoDb connected !! Db Host ${connetionInsatance.connection.host}`)
        
    } catch (error) {

        console.log("mongodb connection error",error);
        process.exit(1);
        
    }
}

export default connectDB;