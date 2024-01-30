import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRefreshToken } from "../2Body/Auth/Hook/useRefreshToken";
import { useAuth } from "../Context/useAuth";

export const Navbar = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  /* const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };*/

  const checkAuth = async () => {
    await axios
      .get("http://localhost:3001/verifyAuth", {
        headers: { Authorization: `Bearer ${auth?.accessToken}` },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <nav className="navbar d-flex align-items-center justify-content-between w-100 position-absolute p-4 ">
      <Link to="/" className="text-decoration-none">
        <h1 className="h1-netflix">NETFLIX</h1>
      </Link>
      {auth?.email ? (
        <section>
          <Link to="/account" className="text-decoration-none">
            <button className="text-white px-4">Account</button>
          </Link>
          <button onClick={checkAuth}>Check Auth</button>
          <Link className="text-decoration-none">
            <button
              // onClick={handleLogout}
              className="btn-sign-up text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </Link>
        </section>
      ) : (
        <section>
          <Link to="/login" className="text-decoration-none">
            <button className="text-white px-4">Sign In</button>
          </Link>
          <Link to="/register" className="text-decoration-none">
            <button className="btn-sign-up text-white px-4 py-2 rounded">
              Sign Up
            </button>
          </Link>
        </section>
      )}
    </nav>
  );
};
