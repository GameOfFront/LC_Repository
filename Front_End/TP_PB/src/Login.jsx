import { useState } from "react";
import "./App.css"; 
import { useLocation } from "react-router-dom";

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const isVisible = location.pathname === "/Login";
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleLogin = () => {
      if (username && password) {
        // Lógica para autenticar o usuário
        console.log('Login successful!');
      } else {
        console.log('Please enter username and password.');
      }
    };
    return (
      <div className={`login-content ${isVisible ? "visible" : "hidden"}`}>
      <div className="login-form">
        <h1 className="login-title">Login</h1>
        <div className="login-input">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="login-input">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
    );
  };