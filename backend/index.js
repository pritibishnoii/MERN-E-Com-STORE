// import path from "path"
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
const app = express();
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

connectDB(() => {
  app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}🚀🚀`);
  });
});
// app.get("/",(req,res)=>{
//     res.send("Hello backend is running successfully🚀")
// })

app.use("/api/users", userRoutes);

// call database
