import React from "react";

export const Navbar = () => {
  return (
    <nav className="d-flex justify-content-between w-100 position-absolute p-4 text-white bg-dark z-index-100">
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
