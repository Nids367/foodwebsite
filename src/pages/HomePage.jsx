import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home '
import Menu from '../components/Menu'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'


const HomePage = () => {
    return (
        <><Navbar />
            <Home />
            <Menu/>
            <About />
            <Gallery />
            <Footer /></>
    )
}

export default HomePage
