import React from "react";

export const SignUp = () => {
  return (
    <main className="w-100 h-100">
      <img
        className="w-100 h-100 position-absolute object-fit-cover "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ce221d7a-8901-41d9-b726-3ea2efe3a650/c214d48d-ad5a-498c-af77-3976ff344e1b/FR-fr-20230703-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      <div className="back-gradient position-absolute w-100 h-100"></div>
      <section className="section-signup w-25 h-75 mx-auto text-white position-absolute px-5 py-5">
        <h2 className="text-white">Sign Up</h2>
        <form>
          <input type="email" />
        </form>
      </section>
    </main>
  );
};
