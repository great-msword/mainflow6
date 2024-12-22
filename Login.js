import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './styles.css';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // For redirection to Dashboard after login

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", { email, password });
      setToken(response.data.token); // Set the token in local state
      navigate("/dashboard"); // Redirect to Dashboard after successful login
    } catch (err) {
      setError(err.response ? err.response.data.message : "Error logging in");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/">Signup here</a></p>
    </div>
  );
};

export default Login;
