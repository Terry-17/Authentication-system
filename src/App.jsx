import React from "react";
import AuthProvider from "./AuthContext";
import ProtectedRoute from "./components/protectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
