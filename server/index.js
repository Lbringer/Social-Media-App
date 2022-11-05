import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

//middleware



//general setup for body parser to send req
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
//to allow cross origin resource sharing
app.use(cors());

app.use('/posts', postRoutes);

//connect server to mongoDB and setup
const CONNURL = "mongodb+srv://Lbringer:Eternal2307!@cluster0.nxd0hqx.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on : ${PORT}`)))
    .catch((e) => console.log(e.message));

// mongoose.set('useFindAndModify', false);  