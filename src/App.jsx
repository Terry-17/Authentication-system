import React from "react";
import Login from "./pages/Login";
import AuthProvider from "./AuthContext";
import Navbar from "./components/navbar";
import ProtectedRoute from "./components/protectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

const App = () => {
  window.onload = () => {
   
  }
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ProtectedRoute/>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
