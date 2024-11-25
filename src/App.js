import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage';
import Menu from './pages/MenuPage';
import About from './pages/AboutPage';
import Footer from './components/Footer';
function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='../pages/MenuPage' element={<Menu/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/footer' element={<Footer/>} />
        </Routes>
      </BrowserRouter>

     
    </>
  );
}

export default App;
