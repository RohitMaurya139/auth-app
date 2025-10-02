import express from "express";
import { signUp, login, logout, getCurrentUser } from "../controllers/authController.js";
import isAuth from "../middleware/isAuth.js";

const authRouter = express.Router();

authRouter.route("/signup").post(signUp);
authRouter.route("/login").post(login);
authRouter.route("/logout").post(logout);
authRouter.get("/currentuser", isAuth, getCurrentUser);



export default authRouter;
