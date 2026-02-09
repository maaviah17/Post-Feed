const express = require("express")
const multer = require("multer")
const app = express();
const postModel = require("./models/post.model");

app.use(express.json());
const  upload = multer({ storage : multer.memoryStorage() })

app.post("/create-post", upload.single("image"), async(req,res)=>{

    // const body = req.body
    console.log(req.body)
    console.log(req.file)
    // res.status(201).json({
    //     msg : "created successfully"
    // })

    console.log("reached inside api")

})
module.exports = app;