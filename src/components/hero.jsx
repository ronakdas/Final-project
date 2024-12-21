import React from 'react'
import { herobg,herobannerbg, mc1 } from '../assets'
import { Link } from 'react-router-dom'
import './Styles/Hero.css'
function Hero() {

    const containerStyle = {
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
    };
    const burgerstyle = {
        backgroundImage: `url(${herobannerbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    return (
        <div className='hero-container' style={containerStyle}>
            <div className='hero-info'>
                <h6>Har Khane Ki ALag Kahani</h6>
                <h1 className='hero-heading'>Khane Khane Mein Ghar Ka Swaad!!!</h1>
                <p className='hero-discription'>A taste of India, served with love....</p>
                <Link to="/shop"><button className='button'>Order Now</button></Link>
            </div>
            <div  className='burger' style={burgerstyle}>
                <img  src={mc1} width={550} />
            </div>
        </div>
    )
}

export default Hero