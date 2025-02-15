import React, { useState } from "react";
import "./LoginForm.css"; // Import CSS for styling
import logo from '../Team9LogoTemporary.png';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Logging in with:", { username, password });
    onLogin(username);
    // Add authentication logic here (API call, validation, etc.)
  };

  const handleCancel = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="imgcontainer">
          <img src={logo} alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label><b>Username</b></label>
          <input 
            type="text" 
            placeholder="Enter Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />

          <label><b>Password</b></label>
          <input 
            type="password" 
            placeholder="Enter Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />

          <button type="submit">Login</button>
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
        </div>

        <div className="container footer">
          <button type="button" className="cancelbtn" onClick={handleCancel}>Cancel</button>
          <span className="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
