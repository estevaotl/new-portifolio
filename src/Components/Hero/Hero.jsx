import React from 'react'
import './Hero.css'
import profileImg from '../../assets/profile_img.svg'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profileImg} alt="" srcset="" />
            <h1>
                <span>I'm Alex,</span> frontend developer based in USA.
            </h1>
            <p>I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Apple and Tesla.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    Connect with me
                </div>

                <div className="hero-resume">
                    My Resume
                </div>
            </div>
        </div>
    )
}

export default Hero