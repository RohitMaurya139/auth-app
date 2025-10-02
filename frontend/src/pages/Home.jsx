import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Logout from "./Logout";

const Home = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-500 text-lg">
          No user data found. Please login.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex items-center">
        {/* User Info Card */}
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Welcome, {user.firstName}!
          </h1>
          <p className="text-gray-700 mb-2">
            <strong>Full Name:</strong> {user.firstName} {user.lastName}
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> {user.email}
          </p>
        </div>

        {/* Logout Button */}
        <div className="ml-2">
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Home;
