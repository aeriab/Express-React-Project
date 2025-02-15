import React, { use, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LoginForm from './components/LoginForm'

// const LoginPage = ({ setUser }) => {
//   const navigate = useNavigate(); // Hook to change pages

//   const handleLogin = (username) => {
//     setUser(username); // Store username in state
//     navigate("/main"); // Redirect to main page
//   };

//   return <LoginForm onLogin={handleLogin} />;
// };

// const MainPage = ({ user }) => {
//   return (
//     <div className="main-page">
//       <h2>Welcome, {user}!</h2>
//       <p>This is the main page after logging in.</p>
//     </div>
//   );
// };

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setBackendData(data))
  }, [])
  
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={user ? <Navigate to="/main" /> : <LoginPage setUser={setUser} />} />
    //     <Route path="/main" element={user ? <MainPage user={user} /> : <Navigate to="/" />} />
    //   </Routes>
    // </Router>
    <LoginForm/>
  );
};

export default App