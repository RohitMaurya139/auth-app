import express from 'express';
import connectDB from './config/db.js';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoutes.js"
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT || 4000
const allowedOrigins = [
  "https://auth-app-frontend-sigma.vercel.app",
  "https://auth-app-frontend-bvvc.onrender.com",
  "http://localhost:5173",
  "http://localhost:5174",
];

// CORS middleware for REST API
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running");
});
app.use("/api/auth", authRouter);



const startServer = async () => {
    await connectDB()
    app.listen(port, function () {
      console.log(`Server Started at port ${port}`);
    });
}
startServer()
