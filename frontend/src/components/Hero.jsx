import React from 'react'
import video1 from "../assets/Hero-Video/3.mp4";

const Hero = () => {
    return (
        <div>
            <header>
                <video className='h-screen w-full object-cover' controls autoplay loop>
                    <source src={video1} type='video/mp4' />
                    Welcome to SpaceHub for Exploring a Space technology.
                </video>
            </header>
        </div>
    )
}

export default Hero;
