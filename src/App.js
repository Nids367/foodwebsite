import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home ';
import About from './components/About';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Gallery from './components/Gallery';
function App() {
  return (
    <>
    <Navbar/>
    <Home/> 
    <div>
    <h1 className="text-6xl font-cursiv text-center p-5">OUR MENU</h1>
    <div className='flex flex-wrap px-80'>
    <Cards imageUrl="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640772.jpg&fm=jpg"
    title="Starters"/>
    <Cards imageUrl="https://images.picxy.com/cache/2020/7/11/544810bdd17aba461bff2d596a472d32.jpg" 
    title="Main Course"/>
    <Cards imageUrl="https://t4.ftcdn.net/jpg/02/17/39/75/360_F_217397519_MqLzfynUsUKGvZj1AB3iPREmr11sYRhk.jpg" 
    title="South Indian"/>
    <Cards imageUrl="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content10735.jpg" 
    title="Italian"/>
    <Cards imageUrl="https://www.brit.co/media-library/3-ingredient-dessert-recipes.jpg?id=23305200&width=300" 
    title="Desserts"/>
    <Cards imageUrl="https://www.cookwithmanali.com/wp-content/uploads/2022/04/Cold-Coffee.jpg" 
    title="Beverages"/>
    </div>
    </div>
    <About/>
    <Gallery/>
    <Footer/>
    </>
  );
}

export default App;
