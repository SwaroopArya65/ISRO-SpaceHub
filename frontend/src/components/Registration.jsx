import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='bg-bg2 max-h-screen h-screen'>
            <div className='flex items-center justify-start pl-4 pt-5 absolute'>
                <img src={logo} className='h-16 w-auto' alt="Company logo" />
                <div>
                    <h1 className='font-playfair tracking-wider text-text-color2 text-xl font-bold'>SpaceHub</h1>
                    <p className='font-publicSans tracking-wide text-text-color text-md font-semibold'>Explore your career in Space</p>
                </div>
            </div>
            <div className='h-screen flex justify-center items-center'>
                <div class="text-center sm:flex items-center justify-between border-gray-400 mx-[10%] mt-12 py-6">
                    <p>CopyRight Recived 2025 by SpaceHub. All rights reserved.</p>
                    <ul class="flex items-center gap-5 justify-center mt-4 sm:mt-0">
                        <li><a href="https://github.com/SwaroopArya65">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/arya-swaroop-0a313b1b2">LinkedIn</a></li>
                        <li><a href="#">Quick Link</a></li>
                    </ul>
                </div>
                <div className='mx-4 p-8 w-full md:w-1/2 lg:w-1/3 bg-bg3 rounded-md'>
                    <h1 className="text-3xl text-text-color2 font-playfair tracking-wider font-bold mb-8 text-center">Join SpaceHub</h1>
                    <form>
                        <div className="mb-4">
                            <label className="block font-publicSans tracking-wide font-semibold text-text-color mb-2" for="email">
                                Email Address
                            </label>
                            <input
                                className="border border-bg2 bg-[#E9E9FF] rounded w-full py-2 px-3 text-text-color2 leading-tight focus:outline-none focus:shadow-outline font-publicSans"
                                id="email" type="email" required placeholder="Enter your email address" />
                        </div>
                        <div className="mb-4">
                            <label className="block font-publicSans tracking-wide font-semibold text-text-color mb-2" for="email">
                                Enter Full name
                            </label>
                            <input
                                className="border border-bg2 bg-[#E9E9FF] rounded w-full py-2 px-3 text-text-color2 leading-tight focus:outline-none focus:shadow-outline font-publicSans"
                                id="email" type="name" required placeholder="Enter Full Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block font-publicSans tracking-wide font-semibold text-text-color mb-2" for="password">
                                Password
                            </label>
                            <input
                                className="border border-bg2 bg-[#E9E9FF] rounded w-full py-2 px-3 text-text-color2 mb-3 leading-tight focus:outline-none focus:shadow-outline font-publicSans"
                                id="password" type="password" required placeholder="Enter your password" />
                            <a className="text-text-color hover:text-gray-800 font-publicSans tracking-wide" href="#">Forgot your password?</a>
                        </div>
                        <div className="mb-6">
                            <button
                                className="bg-text-color2 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-playfair tracking-wider"
                                type="button">
                                Add Memeber
                            </button>
                        </div>
                        <div className='text-center font-playfair text-[17px]'>
                            If already Account ? <Link to="/login" className='text-blue-500 hover:text-blue-800'>Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration;
