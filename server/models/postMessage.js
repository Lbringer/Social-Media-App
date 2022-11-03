import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likedCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMesage = mongoose.model('PostMessage', postSchema);

export default PostMesage;