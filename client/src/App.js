import React, { use, useEffect, useState } from 'react'
import LoginForm from './components/LoginForm'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setBackendData(data))
  }, [])

  return (
    <div>
      <LoginForm />
      {/* <h1>Brendan wuz here, hahahaha</h1>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Users</h1>
          {backendData.users.map((user, i) => (
            <div key={i}>
              <h3>{user}</h3>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}

export default App