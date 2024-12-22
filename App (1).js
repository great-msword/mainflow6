import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import './styles.css';

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <div className="app-container">
        <h1>Welcome to the Web Application</h1>
        <Routes>
          <Route path="/" element={<Signup setToken={setToken} />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/dashboard" element={token ? <Dashboard /> : <Login setToken={setToken} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
