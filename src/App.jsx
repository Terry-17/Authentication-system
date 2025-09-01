import React from "react";
import AuthProvider from "./AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute"

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
