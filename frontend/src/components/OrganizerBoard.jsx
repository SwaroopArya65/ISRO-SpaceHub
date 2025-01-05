import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

// Import new images
import s1 from '../assets/s1.jpg'; // Replace with actual file paths
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import sc1 from '../assets/sc1.jpg';
import sc2 from '../assets/sc2.jpg';
import sc3 from '../assets/sc3.jpg';


const OrganizerBoard = () => {
    return (
        <div className='w-full py-20 relative isolate px-6  pb-14 lg:px-40'>
            <div className="flex justify-between gap-5">
                {/* Select User Section */}
                <div className="flex-1">
                    {/* <h4 className="mb-5 font-playfair tracking-wider font-semibold text-2xl text-gray-900">
                        Select User
                    </h4> */}
                    <div className='grid grid-cols-3 gap-x-1'>
                        {[
                            { title: "Beginner", description: "Courses", image: s1 },
                            { title: "Entr", description: "Courses Cate", image: s2 },
                            { title: "Others", description: "Courses", image: s3 },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`aspect-square h-40 w-48 bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group`}
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                <div
                                    className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 px-3 py-3 flex items-center justify-between duration-500 group-hover:bottom-7'>
                                    <div>
                                        <h2 className="font-semibold">{item.title}</h2>
                                        <p className="text-sm text-gray-700">{item.description}</p>
                                    </div>
                                    <div
                                        className="border rounded-full border-black w-4 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                        <IoIosArrowForward className='w-5' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scientist Types Section */}
                <div className="flex-1">
                    {/* <h4 className="mb-5 font-playfair tracking-wider font-semibold text-2xl text-gray-900">
                        Scientist Types
                    </h4> */}
                    <div className='grid grid-cols-3 gap-x-1'>
                        {[
                            { title: "Aerospa. Eng.", description: "Scientists", image: sc1 },
                            { title: "CS & Eng.", description: "Scientists", image: sc2 },
                            { title: "Others", description: "Scientists", image: sc3 },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className={`aspect-square h-40 w-48 bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group`}
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                <div
                                    className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 px-3 py-3 flex items-center justify-between duration-500 group-hover:bottom-7'>
                                    <div>
                                        <h2 className="font-semibold">{item.title}</h2>
                                        <p className="text-sm text-gray-700">{item.description}</p>
                                    </div>
                                    <div
                                        className="border rounded-full border-black w-4 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                        <IoIosArrowForward className='w-5' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrganizerBoard;
