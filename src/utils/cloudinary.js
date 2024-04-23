import { v2 as cloudinary } from "cloudinary";

import fs from "fs";


// setting configuration parameters globally

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

//  creating a method for uploading files

const uploadOnCloudinary = async (localFilepath) => {
    try {

        if (!localFilepath) return null


        const respone = await cloudinary.uploader.upload(localFilepath, {
            resource_type: "auto"
        })

        // file has be uploaded
        console.log('file is uploaded on cloudinary ', respone.url)
        return respone

    } catch (error) {

        fs.unlinkSync(localFilepath)

    }

}



export {uploadOnCloudinary}