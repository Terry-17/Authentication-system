import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import { AuthContext } from "../AuthContext";
import Dashboard from "../pages/Dashboard";
import Navbar from "./navbar";
import Profile from "../pages/Profile";

const ProtectedRoute = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && <Navbar />}

      <Routes>
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/dashboard" />}
        />

        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default ProtectedRoute;
