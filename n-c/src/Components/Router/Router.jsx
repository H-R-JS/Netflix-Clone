import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../2Body/Home";
import { Trailer } from "../2Body/Trailer/Trailer";
import { Login } from "../2Body/Auth/Login";
import { Register } from "../2Body/Auth/Register";
import { Account } from "../2Body/Account/Account";
import { ProtectedRoute } from "../2Body/Auth/ProtectedRoute";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trailer" element={<Trailer />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
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
