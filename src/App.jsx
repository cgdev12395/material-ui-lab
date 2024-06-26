import { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';

import Homepage from './pages/Homepage';

function App() {
  const navigate = useNavigate();

  useEffect (() => {
    navigate ("/homepage");
  }, []);

  return <>
    <Routes>
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
  </>
}

export default App
