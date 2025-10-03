import express from "express";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import {
  signUp,
  login,
  logout,
  getCurrentUser,
} from "../controllers/authController.js";
import isAuth from "../middleware/isAuth.js";
import User from "../models/userModel.js"; // ✅ Make sure you import your User model

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const authRouter = express.Router();

authRouter.route("/signup").post(signUp);
authRouter.route("/login").post(login);
authRouter.route("/logout").post(logout);
authRouter.get("/currentuser", isAuth, getCurrentUser);

// ✅ Google Auth Route
authRouter.post("/google", async (req, res) => {
  try {
    const { token } = req.body;

    // Verify Google token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { sub: googleId, email, name, picture } = payload;

    // Split full name safely
    const [firstName, ...lastNameParts] = name ? name.split(" ") : ["", ""];
    const lastName = lastNameParts.join(" ");

    // Check if user exists
    let user = await User.findOne({ email });

    if (!user) {
      // Create new user for first-time Google login
      user = new User({
        firstName: firstName || "",
        lastName: lastName || "",
        email,
        googleId,
        picture,
      });
      await user.save();
    }

    // Generate JWT
    const authToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Send token in cookie
    res.cookie("token", authToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production", // important for render
    });

    res.json({ user, token: authToken });
  } catch (error) {
    console.error("Google login error:", error);
    res.status(400).json({ message: "Google login failed", error });
  }
});

export default authRouter;
