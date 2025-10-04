import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { UserContext } from "../context/UserContext";
import logo from "../assets/Logo.png"; 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const SERVER_URL = import.meta.env.VITE_BASE_URL;

  const handleSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post(
        `${SERVER_URL}/api/auth/google`,
        { token: credentialResponse.credential },
        { withCredentials: true }
      );

      setUser(res.data.user);
      navigate("/home");
    } catch (error) {
      console.error("Google login failed:", error);
      setError("Google login failed, please try again.");
    }
  };

  const handleError = () => {
    console.log("Google login failed");
    setError("Google login failed");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${SERVER_URL}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );

      setUser(res.data.data);
      navigate("/home");
      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-around bg-white px-4">
      <div className="bg-white p-8 rounded-2xl w-full max-w-md h-[500px]">
        <div className="flex justify-center">
          <img src={logo} className="w-[50px] h-[50px]" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-2 text-md text-gray-800">
          Log in to your account
        </h1>
        <div className="flex justify-center">
          <p className="text-gray-600 text-sm text-center mb-3 max-w-md leading-relaxed px-2">
            The login page prioritizes user security, offering a seamless
            experience that ensures quick and convenient access to the system's
            array of benefits.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
          >
            Sign In
          </button>

          {/* Google Login */}
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={handleError}
              theme="outline"
              shape="pill" // makes it rounded
              size="large"
            />
          </div>
        </form>

        <p className="text-center text-gray-600  text-sm mt-2">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </div>
      <div className=" w-full max-w-md">
        <img src="/loginImg.jpg" className=" w-full rounded-lg " />
      </div>
    </div>
  );
};

export default Login;
