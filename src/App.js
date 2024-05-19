import React from 'react';
import './App.css';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './pages/contato/contato';
import Fotos from './pages/fotos/fotos';
import User from './pages/user/user';
import Comentarios from './pages/comentarios/comentarios';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/fotos' element={<Fotos />} />
        <Route path='/user' element={<User name='Victor' />} />
        <Route path='/comentarios' element={<Comentarios />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
