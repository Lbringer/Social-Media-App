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

export const createPost = (req, res) => {
    const post = req.body
    try {
    } catch (error) {

    }
}