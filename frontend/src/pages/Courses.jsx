import React from 'react'
import Navbar from '../components/Navbar';
import Courseslist from '../components/Courseslist';

const Courses = () => {
    return (
        <div className="relative bg-white">
            <div>
                <Navbar />
            </div>
            <div className="relative isolate px-6 pt-24 lg:px-40 flex justify-between items-center">
                <h1 className='font-playfair tracking-wider text-text-color2 text-2xl font-bold'>Courses</h1>
                <p className='font-publicSans tracking-wide text-text-color text-md font-semibold bg-text-color3 px-2 py-1 rounded-md'>All Updated Content</p>
            </div>
            <div className="relative isolate px-6 pt-24 lg:px-40">
                <Courseslist />
            </div>
        </div>
    )
}

export default Courses;
