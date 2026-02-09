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
    console.log(req.body)
    console.log(imgFile) 
    // res.status(201).json({
    //     msg : "created successfully"
    // })
    const result = await uploadFile(imgFile.buffer)
    console.log(result)

})
module.exports = app;