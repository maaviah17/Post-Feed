const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors({
  origin: "http://localhost:5173", // your frontend URL
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());


const postRoutes = require("./routes/posts.routes")
const authRoutes = require("./routes/auth.routes")

app.use("/api/posts",postRoutes)
app.use("/api/auth", authRoutes)


module.exports = app;