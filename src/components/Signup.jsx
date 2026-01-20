import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {session, signUpNewUser} = UserAuth();
  console.log(session);
  return (
    <div>
      <form className="max-w-md m-auto pt-24">
        <h2 className="font-bold pb-2">Sign Up</h2>

        <div className="flex flex-col py-4">
          <input
            placeholder="Email"
            type="email"
            className="p-3 mt-6 bg-neutral-950"
          />
          <input
            placeholder="Password"
            type="password"
            className="p-3 mt-6 bg-neutral-950"
          />
          <button
            type="submit"
            disabled={loading}
            className="border bg-neutral-500 text-white mt-4 p-3"
          >
            Sign Up
          </button>
        </div>
        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
