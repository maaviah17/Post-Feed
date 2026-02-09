require("dotenv").config()

const app = require("./src/app")
const connectDB = require("./src/db/db")


async function startServer() {
  try {
    await connectDB(); // wait for DB
    app.listen(3001, () => {
      console.log("server running on port 3001 🚀");
    });
  } catch (error) {
    console.error("failed to start server", error);
  }
}

startServer();