import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext";

const Login = () => {
  const {login} = useContext(AuthContext);
  const [username, setUsername] = useState("")

   const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "") {
      alert("Please enter a username");
      return;
    }

    login(username);
    alert(`Welcome, ${username}!`);
    setUsername("");
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="bg-slate-800 p-8 rounded-2xl shadow-lg w-96">
          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-sky-400 mb-6">
            Authentication
          </h2>

          {/* Username Input */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-slate-300 font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-4 py-2 rounded-xl bg-slate-700 text-white 
                         placeholder-slate-400 focus:outline-none 
                         focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 
                       text-white font-semibold py-2 px-4 
                       rounded-xl shadow-md transition"
            >
              LogIn
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
