import React, { useEffect, useState } from "react";
import "./LoginForm.css"; // Import CSS for styling
import logo from '../Team9LogoTemporary.png';
import { globalState, updateGlobalState } from "../global.js";

const LoginForm = () => {
  const [backendData, setBackendData] = useState([{}])

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let usernameFound = false;

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setBackendData(data))
  }, [])

  const handleCreate = () => {
    console.log("Creating new user with username " + username + " and password " + password + ".");
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Logging in with:", { username, password });

    backendData.users.map((user, i) => {
      if (username === user) {
        usernameFound = true;
        console.log("Username found!");
        if (password === "admin") {
          console.log("Password correct! Logging in...");
          globalState.username = username;
          globalState.isLoggedIn = true;
          updateGlobalState(username, true);
        } else {
          alert("Invalid credentials. Please try again.");
        }
      }
    })

    if (!usernameFound) {
      alert("Username not found.");
    }
  };

  const handleCancel = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2>Login Form</h2>
      <form>
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

          <button type="submit" onClick={handleSubmit}>Login</button>
          <button type="create" onClick={handleCreate}>Create Account</button>
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
