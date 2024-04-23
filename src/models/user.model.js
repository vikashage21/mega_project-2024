import mongoose, { Schema } from "mongoose";
import jwt from "jwt";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true  // for using  searching

    }
    ,

    email: {
        type: string,
        required: true,
        unique: true,
        lowercase: true,
        trim: true

    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String, // cloudinary url 
        required: true,


    },
    coverImage: {
        type: String, // cloudinary url 

    },
    watchHistory: [
        {
            type: mongoose.Types.ObjectId,
            ref: "video "
        }
    ],

    password: {
        type: String,
        required: [true, 'password is required'],
        unique: true
    }, 
    
    refreshToken: {
        type: String
    }

}, {
    timestamps: true
})


// before saving the data form database , execute the function
userSchema.pre("save", async function( next){
if(!this.isModified('password')) return next()

    this.password = bcrypt.hash(this.password ,10)
    next()
 })

userSchema.method.isPasswordCorrect= async function(password){
    return await  bcrypt.compare(password,this.password)
}

userSchema.methods.generateAuthToken = async function() {

return  jwt.sign(
    {
        //writing playload here 
        _id:this._id,
        email:this.email,
        username:this.username,
        fullname:this.fullname,
    },process.env.ACESS_TOKEN_SECRET,
     {
        expiresIn: process.env.ACESS_TOKEN_EXPIRY
    }
)

}

userSchema.methods.generAteRefreshToken = async function(){
    return  jwt.sign(
        {
            //writing playload here 
            _id:this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname,
        },process.env.REFRESH_TOKEN_SECRET,
         {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )

}

export const User = mongoose.model('User', userSchema)