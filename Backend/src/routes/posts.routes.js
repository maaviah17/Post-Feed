const express = require("express")
const router = express.Router();
const uploadFile = require("../services/storage.service")
const multer = require("multer")
const postModel = require("../models/post.model")
const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model")

const  upload = multer({ storage : multer.memoryStorage() })

// create-post
router.post("/", upload.single("image"), async(req,res)=>{

    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            msg : "Unauthorized"
        })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
    try{
        const user = await userModel.findOne({
            _id : decoded.id
        })

        console.log(user);
    }catch(err){
        return res.status(401).json({
            msg : "Invalid Token ;( "
        })
    }
    
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    // const body = req.body
    const imgFile = req.file
    if (!imgFile){
        return res.status(400).json({ msg: "No image" });
    }
    // console.log(req.body)
    console.log(imgFile)
    const result = await uploadFile(imgFile.buffer)
    console.log(result)

    const post = await postModel.create({
        image : result.url,
        caption : req.body.caption,
        user : decoded.id
    })

    return res.status(201).json({
        msg : "Post created successfully",
        post : post
    })

})

// /get-all-posts 
router.get("/", async(req,res)=>{

    const posts = await postModel.find();
    
    return res.status(200).json({
        msg : "all posts fetched successfully",
        posts
    })
})

module.exports = router;