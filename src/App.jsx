import { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';

import Homepage from './pages/Homepage';
import Login from './pages/Login';

function App() {
  const navigate = useNavigate();

  useEffect (() => {
    navigate ("/homepage");
  }, []);

  return <>
    <Routes>
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/certificate" element={<Login />} />
    </Routes>
  </>
}

export default App
