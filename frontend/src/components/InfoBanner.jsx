import React from 'react'
import GradientBg from './GradientBg';

const InfoBanner = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <GradientBg />
            <div className="bg-gradient-to-r via-stone-400 to-blue-50 border-b-4 border-stone-300 p-6 rounded-lg">
                <h2 className="text-gray-900 text-2xl font-playfair tracking-wider font-bold mb-4">Admissions</h2>
                <ul className="list-disc text-gray-500 font-publicSans tracking-wide pl-5 text-balance">
                    <li className='mb-1'>PG Admission Status Report 2023, University Campus Subject Wise</li>
                </ul>
            </div>

            <div className="bg-gradient-to-r via-stone-400 to-blue-50 border-b-4 border-stone-300 p-6 rounded-lg">
                <h2 className="text-gray-900 text-2xl font-playfair tracking-wider font-bold mb-4">Examinations</h2>
                <ul className="list-disc text-gray-500 font-publicSans tracking-wide pl-5">
                    <li className='mb-1'>Admit Card</li>
                </ul>
            </div>

            <div className="bg-gradient-to-r via-stone-400 to-blue-50 border-b-4 border-stone-300 p-6 rounded-lg">
                <h2 className="text-gray-900 text-2xl font-playfair tracking-wider font-bold mb-4">Academic</h2>
                <ul className="list-disc text-gray-500 font-publicSans tracking-wide pl-5">
                    <li className='mb-1'>Academic Calendar</li>
                </ul>
            </div>

            <div className="col-span-2 bg-gradient-to-r via-stone-400 to-blue-50 border-b-4 border-stone-300 p-6 rounded-lg">
                <h2 className="text-gray-900 text-2xl font-playfair tracking-wider font-bold mb-4">Recents Program, & Events</h2>
                <ul className="list-disc text-gray-500 font-publicSans tracking-wide pl-5">
                    <li className='mb-1'>Educational Courses: Structured learning paths for various proficiency levels.</li>
                    <li className='mb-1'>Workshops and Seminars: Information on upcoming and past events.</li>
                    <li className='mb-1'>Research Initiatives: Details on ongoing and completed research projects.</li>
                    <li className='mb-1'>Upcoming: Space & Technology Awareness Training Programme-2025 (START-2025).</li>
                </ul>
            </div>

            <div className="bg-gradient-to-r via-stone-400 to-blue-50 border-b-4 border-stone-300 p-6 rounded-lg">
                <h2 className="text-gray-900 text-2xl font-playfair tracking-wider font-bold mb-4">ALL Resources</h2>
                <ul className="list-disc text-gray-500 font-publicSans tracking-wide pl-5">
                    <li className='mb-1'>Latest Articles: Newly published content on space exploration.</li>
                    <li className='mb-1'>Recent Discoveries: Updates on the latest findings in space science.</li>
                    <li className='mb-1'>Newsletters: Recent editions covering current events and advancements.</li>
                    <li className='mb-1'>Educational Programs</li>
                </ul>
            </div>
        </div>
    )
}

export default InfoBanner;
