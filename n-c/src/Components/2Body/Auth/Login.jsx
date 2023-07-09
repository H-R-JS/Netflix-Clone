import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <main className="d-flex justify-content-center w-100 h-100">
      <img
        className="w-100 h-100 position-absolute object-fit-cover "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ce221d7a-8901-41d9-b726-3ea2efe3a650/c214d48d-ad5a-498c-af77-3976ff344e1b/FR-fr-20230703-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      <div className="back-gradient position-absolute w-100 h-100"></div>
      <section className="section-signup mx-auto text-white position-absolute px-5 py-5">
        <h2 className="mb-4 text-white">Sign In</h2>
        <form className="w-100 d-flex flex-column">
          <input
            className="input-up py-3 px-3 my-3 rounded text-white"
            type="email"
            placeholder="Email"
            autoComplete="email"
          />
          <input
            className="input-up py-3 px-3 my-3 rounded text-white"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
          />
          <button className="btn-up rounded py-3 my-5 text-white ">
            Sign In
          </button>
          <div className="d-flex justify-content-between align-items-center text-secondary">
            <p>
              <input className="mr-2" type="checkbox" /> Remenber me
            </p>
            <p>Need Help ?</p>
          </div>
          <p className="py-4">
            <span className="text-secondary">New to Netflix ?</span>{" "}
            <Link to="/signup" className="text-white">
              Sign Up
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
};
