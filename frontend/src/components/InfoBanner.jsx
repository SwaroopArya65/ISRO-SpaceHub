import React from 'react'
import GradientBg from './GradientBg';
import { Link } from 'react-router-dom';
import { TbCircleDotFilled } from "react-icons/tb";

const InfoBanner = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <GradientBg />
            <div className="bg-gradient-to-r via-stone-400 to-blue-50 border-b-4 border-stone-300 p-6 rounded-lg">
                <h2 className="text-gray-900 text-2xl font-playfair tracking-wider font-bold mb-4">Admissions</h2>
                <Link to="/" className="flex items-center text-gray-500  hover:underline font-publicSans tracking-wide mb-1">
                    <TbCircleDotFilled className='mr-2' />
                    PG Admission Status Report 2023, University Campus Subject Wise.
                </Link>

            </div>

            <div className="bg-gradient-to-r via-stone-400 to-blue-50 border-b-4 border-stone-300 p-6 rounded-lg">
                <h2 className="text-gray-900 text-2xl font-playfair tracking-wider font-bold mb-4">Examinations</h2>
                <Link to="/" className=" flex items-center text-gray-500 hover:underline">
                    <TbCircleDotFilled className='mr-2' />
                    Admit Card
                </Link>
                <Link to="/" className=" flex items-center text-gray-500 hover:underline">
                    <TbCircleDotFilled className='mr-2' />
                    Marks Entry Panel
                </Link>
                <Link to="/" className=" flex items-center text-gray-500 hover:underline">
                    <TbCircleDotFilled className='mr-2' />
                    Result Link
                </Link>
            </div>

            <div className="bg-gradient-to-r via-stone-400 to-blue-50 border-b-4 border-stone-300 p-6 rounded-lg">
                <h2 className="text-gray-900 text-2xl font-playfair tracking-wider font-bold mb-4">Academic</h2>
                <Link to="/" className=" flex items-center text-gray-500 hover:underline">
                    <TbCircleDotFilled className='mr-2' />
                    Academic Calendar
                </Link>
                <Link to="/" className=" flex items-center text-gray-500 hover:underline">
                    <TbCircleDotFilled className='mr-2' />
                    Sports Calendar
                </Link>
                <Link to="/" className=" flex items-center text-gray-500 hover:underline">
                    <TbCircleDotFilled className='mr-2' />
                    Examination Calendar
                </Link>
            </div>

            <div className="col-span-2 bg-gradient-to-r via-stone-400 to-blue-50 border-b-4 border-stone-300 p-6 rounded-lg">
                <h2 className="text-gray-900 text-2xl font-playfair tracking-wider font-bold mb-4">Recents Program, & Events</h2>
                <Link to="/" className="flex items-center text-gray-500 hover:underline mb-1 font-publicSans tracking-wide">
                    <TbCircleDotFilled className='mr-2' />
                    Educational Courses: Structured learning paths for various proficiency levels.
                </Link>
                <Link to="/" className="flex items-center text-gray-500 hover:underline mb-1 font-publicSans tracking-wide">
                    <TbCircleDotFilled className='mr-2' />
                    Workshops and Seminars: Information on upcoming and past events.
                </Link>
                <Link to="/" className="flex items-center text-gray-500 hover:underline mb-1 font-publicSans tracking-wide">
                    <TbCircleDotFilled className='mr-2' />
                    Research Initiatives: Details on ongoing and completed research projects.
                </Link>
                <Link to="/" className="flex items-center text-gray-500 hover:underline mb-1 font-publicSans tracking-wide">
                    <TbCircleDotFilled className='mr-2' />
                    Upcoming: Space & Technology Awareness Training Programme-2025 (START-2025).
                </Link>
            </div>

            <div className="bg-gradient-to-r via-stone-400 to-blue-50 border-b-4 border-stone-300 p-6 rounded-lg">
                <h2 className="text-gray-900 text-2xl font-playfair tracking-wider font-bold mb-4">ALL Resources</h2>
                <Link to="/" className="flex items-center text-gray-500 hover:underline mb-1 font-publicSans tracking-wide">
                    <TbCircleDotFilled className='mr-2' />
                    Latest Articles: Newly published content on space exploration.
                </Link>
                <Link to="/" className="flex items-center text-gray-500 hover:underline mb-1 font-publicSans tracking-wide">
                    <TbCircleDotFilled className='mr-2' />
                    Recent Discoveries: Updates on the latest findings in space science.
                </Link>
                <Link to="/" className="flex items-center text-gray-500 hover:underline mb-1 font-publicSans tracking-wide">
                    <TbCircleDotFilled className='mr-2' />
                    Newsletters: Recent editions covering current events and advancements.
                </Link>
                <Link to="/" className="flex items-center text-gray-500 hover:underline mb-1 font-publicSans tracking-wide">
                    <TbCircleDotFilled className='mr-2' />
                    Educational Programs: Newly published content on space exploration.
                </Link>
            </div>
        </div>
    )
}

export default InfoBanner;
