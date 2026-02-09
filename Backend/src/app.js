const express = require("express")
const multer = require("multer")
const uploadFile = require("./services/storage.service")
const app = express();
const postModel = require("./models/post.model");

app.use(express.json());
const  upload = multer({ storage : multer.memoryStorage() })

app.post("/create-post", upload.single("image"), async(req,res)=>{

    // const body = req.body
    const imgFile = req.file
    // console.log(req.body)
    // console.log(imgFile) 
    const result = await uploadFile(imgFile.buffer)
    console.log(result)

    const post = await postModel.create({
        image : result.url,
        caption : req.body.caption
    })

    return res.status(201).json({
        msg : "Post created successfully",
        post : post
    })

})

app.get("/posts", async(req,res)=>{

    const posts = await postModel.find();

    return res.status(200).json({
        msg : "all posts fetched successfully",
        posts : posts,
    })

})
module.exports = app;