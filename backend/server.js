import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/userRoute.js";

// console.log('hello world');
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/api/user',userRouter)

app.get("/", (req, res) => {
  res.send("API working");
});

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log('DB connected');
}).catch((err)=>{
    console.log(err);
})

app.listen(port, () => {
  console.log(`port running on localhost:${port}`);
});
