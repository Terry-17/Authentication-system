import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Build user profile info
  const myUser = {
    name: user.username,
    email: `${user.username}@gmail.com`,
    bio: `Hello, I am ${user.username}. I love 😍 react js`,
  };

  return (
<>
  <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="max-w-md mx-auto bg-slate-800 rounded-2xl shadow-lg overflow-hidden p-6 text-slate-200">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-sky-400">{myUser.name}</h2>
          <p className="text-slate-300">{myUser.email}</p>
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold text-sky-300 mb-2">About Me</h3>
          <p className="text-slate-400">{myUser.bio}</p>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-sky-600 text-slate-200 rounded-lg hover:bg-slate-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
</>
  );
};

export default Profile;
