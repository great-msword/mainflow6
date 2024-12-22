import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './styles.css';

const Signup = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // For navigation after signup

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending data to backend:', { username, email, password });  // Debugging log
      const response = await axios.post("http://localhost:5000/api/signup", { username, email, password });
      setToken(response.data.token);  // Set the token in local state
      navigate("/login"); // Redirect to login page after signup
    } catch (err) {
      console.log('Error during signup request:', err);  // Debugging log
      setError(err.response ? err.response.data.message : "Error signing up");
    }
  };
  

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
};

export default Signup;
