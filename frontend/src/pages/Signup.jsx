 import React from "react";
import { useState } from "react";
import Steps from "../components/signup/Steps";
import StepContent from "../components/signup/StepContent";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import loginImg from "../assets/loginImg.png";
// import logo from "../assets/Logo.png";
// import { UserContext } from "../context/UserContext";
// const Signup = () => {
//         const [firstName, setFirstName] = useState("");
//         const [lastName, setLastName] = useState("");
//         const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//       const { setUser } = useContext(UserContext);
//     const navigate =useNavigate()
//     const SERVER_URL = import.meta.env.VITE_BASE_URL;
//      const handelSignUp = async (e) => {
//        e.preventDefault();

//        try {
//          const res = await axios.post(
//            SERVER_URL + "/api/auth/signup",
//            {
//              firstName: firstName,
//              lastName: lastName,
        
//              email: email,
//              password: password,
//            },
//            { withCredentials: true }
//          );
//          console.log(res.data.data);
//          setUser(res.data.data)
//         navigate("/home");

//          setFirstName("");
//          setLastName("");
//          setEmail("");
//          setPassword("");
//        } catch (error) {
//          setError(error.response.data.message);
//          console.error(error.message);
//        }
//      };
//   return (
//     <div className="min-h-screen flex items-center justify-around bg-white px-4">
//       <div className="bg-white p-8 rounded-2xl w-full max-w-md">
//         <div className="flex justify-center">
//           <img src={logo} className="w-72px h-72px" />
//         </div>
//         <h1 className="text-3xl font-bold text-center mb-4 text-md text-gray-800">
//           Sign Up to new account
//         </h1>

//         <form onSubmit={handelSignUp} className="space-y-4">
//           <div className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-gray-700 mb-1">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 name="firstName"
//                 placeholder="Enter First Name"
//                 autoFocus
//                 className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <label htmlFor="name" className="block text-gray-700 mb-1">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 placeholder="Enter Last Name"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <label htmlFor="email" className="block text-gray-700 mb-1">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-gray-700 mb-1">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
//           >
//             Sign In
//           </button>
//         </form>

//         <p className="text-center text-gray-600 mt-6 text-sm">
//           Already have an account?{" "}
//           <a href="/login" className="text-blue-500 hover:underline">
//             Sign In
//           </a>
//         </p>
//       </div>
//       <div className=" w-full max-w-md">
//              <img src={loginImg} className=" w-full rounded-lg " />
//            </div>
//     </div>
//   );
// };

// export default Signup;


const Signup = () => {
  const [changeTab,setChangeTab]=useState("1")
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="flex w-1/4 ">
        <Steps changeTab={changeTab} />
      </div>
      <div className="flex w-3/4">
        <StepContent changeTab={changeTab} setChangeTab={setChangeTab} />
      </div>
    </div>
  );
}

export default Signup