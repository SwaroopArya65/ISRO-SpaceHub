import React from 'react'
import Navbar from '../components/Navbar';
import Courseslist from '../components/Courseslist';

const Courses = () => {
    return (
        <div className="relative bg-white">
            <div>
                <Navbar />
            </div>
            <div className="relative isolate px-6 pt-24 lg:px-40 w-full bg-bg2 h-80">
                <Courseslist />
            </div>
        </div>
    )
}

export default Courses;
