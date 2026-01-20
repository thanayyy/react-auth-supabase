import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {session, signUpNewUser} = UserAuth();
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        const result = await signUpNewUser(email, password);
        if (result.success) {
            navigate("/dashboard");
        }
    } catch (error) {
        setError("Failed to sign up. Please try again.");
    } finally {
        setLoading(false);
    }
  }
  return (
    <div>
      <form onSubmit={handleSignUp} className="max-w-md m-auto pt-24">
        <h2 className="font-bold pb-2">Sign Up</h2>

        <div  className="flex flex-col py-4">
          <input onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            className="p-3 mt-6 bg-neutral-950"
          />
          <input onChange={(e) => setPassword(e.target.value)}
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
        {error && <p className="text-red-500 text-center pt-4">{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
