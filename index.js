import express from "express";
import dbConnect from "./config/db.js";
import userRouter from "./routes/userRoute.js";
const app = express();

// Middleware
app.use(express.json());
app.use("/api/users", userRouter);

// Start Server
const startServer = async () => {
  await dbConnect();
  app.listen(8080, () => console.log("Server started"));
};
startServer();