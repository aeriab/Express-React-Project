import React, { use, useEffect, useState } from 'react'
import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage';
import { globalState, updateGlobalState } from "./global.js";


// LoggedInView.js
function LoggedInView({ username, onLogout }) {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize with false

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setBackendData(data))
  }, [])

  const handleLogin = () => {
    setIsLoggedIn(true); // This will trigger a re-render
  };

  return (
    <>
      {isLoggedIn ? (
        <HomePage />
      ) : (
        <LoginForm onLogin={handleLogin}/>
      )}
    </>
  );
}

export default App