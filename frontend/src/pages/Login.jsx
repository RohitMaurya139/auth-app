import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
    const navigate = useNavigate();
       const { setUser } = useContext(UserContext);
  const SERVER_URL = import.meta.env.VITE_BASE_URL;
  const handelLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        SERVER_URL + "/api/auth/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      console.log(res.data.data);
       setUser(res.data.data)
      navigate("/home");
      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error.response.data.message);
      console.error(error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          SignIn
        </h1>
        <form className="space-y-4">
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Enter Your Email"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            onClick={handelLogin}
            className="w-full bg-blue-500 text-white cursor-pointer py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          New To Website?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
