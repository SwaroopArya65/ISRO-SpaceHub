import React from 'react'
import { Link } from 'react-router-dom';


const AboutUs = () => {
    return (
        // relative isolate px-6 pt-14 pb-10 lg:px-40 aspect-square bg-[url('./assets/1.png')] bg-no-repeat bg-contain group h-[400px] w-full
        <div className="relative isolate px-6 pt-14 lg:px-40 aspect-square bg-[url('./assets/c1.png')] bg-no-repeat bg-cover group h-[400px] w-full">
            <blockquote class="text-4xl tracking-wider font-bold font-playfair text-start text-text-color2 mb-5">
                Know About
                <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-bg relative inline-block ml-2">
                    <span class="relative text-white italic roun">SpaceHub</span>
                </span>
            </blockquote>
            <div className='w-[50%] text-justify'>
                <p className='first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-text-color text-text-color font-semibold first-letter:mr-3 first-letter:float-left font-publicSans tracking-wide'>
                    SpaceHub is an online platform that makes learning about space science and technology engaging and interactive.
                    It's designed to educate and inspire students, entrepreneurs, and startups by offering a wide range of resources
                    and captivating content related to the universe. Through interactive modules, comprehensive materials, and up-to-date
                    information, SpaceHub aims to bridge the gap between theoretical knowledge and practical application in the field of
                    space science. This approach aligns with initiatives like NASA's educational programs, which provide free web-based
                    games and interactive experiences to make space science accessible and enjoyable. <Link className='rounded-full px-2 py-1 text-blue-900 font-semibold tracking-wider text-md'>Read More</Link>
                </p>
            </div>
        </div>
    )
}

export default AboutUs;
