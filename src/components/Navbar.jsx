import React, { useContext } from "react";
import AuthProvider, { AuthContext } from "../AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <>
      <nav className="p-4 bg-slate-800 text-white flex justify-between">
        {user ? (
          <div className="flex gap-4 items-center">
            <button
              onClick={logout}
              className="bg-sky-500 px-3 py-1 rounded-lg hover:bg-sky-600"
            >
              Logout
            </button>
            <Link
              to="/dashboard"
              className="bg-sky-500 px-3 py-1 rounded-lg hover:bg-sky-600"
            >
              Dashboard
            </Link>
            <Link
              to="/profile"
              className="bg-sky-500 px-3 py-1 rounded-lg hover:bg-sky-600"
            >
              Profile
            </Link>
          </div>
        ) : (
          <Link to={"/login"}
            onClick={() => login("Mary")}
            className="bg-sky-500 px-3 py-1 rounded-lg hover:bg-sky-600"
          >
            Login
          </Link>
        )}
      </nav>
    </>
  );
};

export default Navbar;
