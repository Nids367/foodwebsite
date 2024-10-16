import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage';
import Cards from './components/Cards';
import About from './components/About';
import Footer from './components/Footer';
function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/cards' Component={Cards} />
          <Route path='/cards' Component={About} />
          <Route path='/cards' Component={Footer} />
        </Routes>
      </BrowserRouter>

     
    </>
  );
}

export default App;
