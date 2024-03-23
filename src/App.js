import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import LoginPage from './Login.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
