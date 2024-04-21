import mongoose, { schema } from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'
const videoSchema = new schema({

    videoFile: {
        type: String, // couldinary url
        required: true

    },
    thumbnail: {
        type: String,
        required: true

    },
    title: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: true

    },
    duration: {
        type: Number, // couldinary duration
        required: true

    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {


        type: Boolean,
        default: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }




})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)