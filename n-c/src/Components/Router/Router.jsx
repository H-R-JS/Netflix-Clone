import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../2Body/Home";
import { Login } from "../2Body/Auth/Login";
import { SignUp } from "../2Body/Auth/SignUp";
import { Account } from "../2Body/Account/Account";
import { ProtectedRoute } from "../2Body/Auth/ProtectedRoute";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/account"
        element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
