import React, { useEffect, useState } from "react";
import { globalState, updateGlobalState } from "../global.js";

const HomePage = () => {
  const [backendData, setBackendData] = useState([{}])

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let usernameFound = false;

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setBackendData(data))
  }, [])

  return (
    <div className="login-container">
      <h2>Home Page !!</h2>
      <form>

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
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
        </div>
      </form>
    </div>
  );
};

export default HomePage;