const app = require("./src/app")
const connectDB = require("./src/db/db")
require("dotenv").config()

connectDB();

app.listen(3001,()=>{
    console.log("servers running ... hehe")
})