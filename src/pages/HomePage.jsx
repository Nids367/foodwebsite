import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home '
import Menu from './MenuPage'
import About from './AboutPage'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import Location from './Location'



const HomePage = () => {
    return (
        <><Navbar />
            <Home />
            <About />
            <Gallery />
            <Location/>
            <Footer /></>
    )
}

export default HomePage
