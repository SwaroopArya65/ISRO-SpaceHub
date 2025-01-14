import React from 'react'
import Navbar from '../components/Navbar';
import Courseslist from '../components/Courseslist';

const Courses = () => {
    return (
        <div className="relative bg-white">
            <div>
                <Navbar />
            </div>
            <div className='p-6 lg:px-40'>
                <div className='mt-20 bg-bg2'>
                    <Courseslist />
                </div>
            </div>
        </div>
    )
}

export default Courses;
