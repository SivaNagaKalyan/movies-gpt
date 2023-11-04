import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background"
        />
      </div>
      <form className="absolute p-12 bg-black bg-opacity-80 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-sm ">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email address "
          className="p-4 my-4 w-full rounded-sm bg-gray-700 "
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-sm bg-gray-700"
        />
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Confirm Password"
            className="p-4 my-4 w-full rounded-sm bg-gray-700"
          />
        )}
        <button className="p-4 my-6 bg-red-700 text-white w-full rounded-sm">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Movies-GPT? Sign Up Now"
            : "Already a User! please Sign In!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
