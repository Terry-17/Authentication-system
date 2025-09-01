import React, {useContext} from "react";
import { Navigate } from "react-router-dom";
import AuthProvider, { AuthContext } from "../AuthContext";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
    logout();
    <Navigate to={"/login"}/>
  };

    if (!user) return null;

  return (<>
 <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-slate-200">
      <h1 className="text-4xl font-bold mb-4 text-sky-400">
        Welcome, {user.username}!
      </h1>
      <p className="mb-6 text-slate-300">
        You have successfully logged in. Enjoy your session!
      </p>
      <button
        onClick={handleLogout}
        className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition"
      >
        Logout
      </button>
    </div>
  </>);
};

export default Dashboard;
