import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar d-flex align-items-center justify-content-between w-100 position-absolute p-4 ">
      <h1 className="h1-netflix">NETFLIX</h1>
      <section>
        <button className="text-white px-4">Sign In</button>
        <button className="btn-sign-up text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </section>
    </nav>
  );
};
