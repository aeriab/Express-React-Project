import React, { use, useEffect, useState } from 'react'
import LoginForm from './components/LoginForm'
import { globalState, updateGlobalState } from "./global.js";

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setBackendData(data))
  }, [])

  if (globalState.isLoggedIn) {
    console.log("on welcome page")
    return (
      <div>
        <h1>Welcome, {globalState.username}!</h1>
        <button onClick={() => updateGlobalState("", false)}>Logout</button>
      </div>
    );
  } else {
    // console.log("Is logged in: " + globalState.isLoggedIn)
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
}

export default App