import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState("");
  const SERVER_URL = import.meta.env.VITE_BASE_URL;

  const handelLogout = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${SERVER_URL}/api/auth/logout`,
        {},
        { withCredentials: true }
      );
      console.log(res);
      setUser(null); // Clear user context
      navigate("/login");
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
      console.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <button
        onClick={handelLogout}
        className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none cursor-pointer focus:ring-2 focus:ring-red-400 transition duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
