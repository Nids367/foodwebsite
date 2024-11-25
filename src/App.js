import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage';
import Menu from './pages/MenuPage';
import About from './pages/AboutPage';
import Footer from './components/Footer';
import { elementPath } from './routes/path';
function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path={elementPath.Home} element={<HomePage/>}/>
          <Route path={elementPath.Menu} element={<Menu/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/footer' element={<Footer/>} />
        </Routes>
      </BrowserRouter>

     
    </>
  );
}

export default App;
