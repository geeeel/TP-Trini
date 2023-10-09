import CreatePost from './CrearPost';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header style={{backgroundColor:'#101B66', color:'white', padding:'15px'}}>
        
        <Link to="/CrearPost">CREAR POST</Link>
      </header>
      <Routes>
        <Route path="/destino" element={<div>destino</div>} />
        <Route path="/asd" element={<div>asd</div>} />
        <Route path="/" element={<div>home</div>} />
        <Route path="/CrearPost" element={<CreatePost />} />

      </Routes>
    </>
  )
}

export default App
  