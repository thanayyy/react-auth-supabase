import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {session, signInUser} = UserAuth();
  const navigate = useNavigate();
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
        const result = await signInUser(email, password);
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
      <form onSubmit={handleSignIn} className="max-w-md m-auto pt-24">
        <h2 className="font-bold pb-2">Sign In</h2>

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
            Sign In
          </button>
        </div>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
        {error && <p className="text-red-500 text-center pt-4">{error}</p>}
      </form>
    </div>
  );
};

export default Signin;
