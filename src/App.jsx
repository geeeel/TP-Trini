//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

import { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import React from 'react';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header style={{backgroundColor:'#101B66', color:'white', padding:'15px'}}>
        <h1>Bienvenido al Blog</h1>
        <Link to="/crear-post"classname="boton">Crear Post</Link>
      </header>
      
    </>
  )
}

export default App
