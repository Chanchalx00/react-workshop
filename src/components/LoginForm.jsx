import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

export const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() == "" || password.trim() == "") {
      setError("fill");
      return;
    }
    localStorage.setItem("isLoggedIn", "true");
    onLogin();
    navigate("/home");
  };

  const backgroundStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(to bottom, #2e005f, #7b2fb2, #d47cda, #f9b18d, #fcd17d)",
    fontFamily: "'Jost', 'Poppins', sans-serif",
  };

  return (
    <section style={backgroundStyle}>
      <div className="login-container">
        <div className="">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          {error && <p>{error}</p>}
        </div>
      </div>
    </section>
  );
};
