import PostMesage from "../models/postMessage.js";


export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMesage.find();
        console.log(postMessages);

        //200->everything ok
        res.status(200).json(postMessages);
    } catch (error) {
        //404->error
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const post = req.body

    const newPost = new PostMesage(post);
    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}