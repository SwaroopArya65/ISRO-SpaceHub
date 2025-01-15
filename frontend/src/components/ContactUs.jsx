import React from 'react'
import GradientBg from './GradientBg';
import { IoLocationSharp, IoCallSharp } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";

import contact from '../assets/s1.jpg';

const ContactUs = () => {
    return (
        // relative isolate px-6 pt-14 pb-14 lg:px-40 bg-zinc-50
        <div className="relative isolate px-6 pt-14 pb-10 lg:px-40 aspect-square bg-[url('./assets/cb.png')] bg-no-repeat bg-contain group h-[400px] w-full">
            <GradientBg position="top-[calc(100%-13rem)] sm:top-[calc(100%-40rem)]" />
            <div className='flex items-center justify-between'>
                <div>
                    <blockquote class="text-4xl tracking-wider font-bold font-playfair text-start text-text-color2 mb-5">
                        Get In
                        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-bg relative inline-block ml-2">
                            <span class="relative text-white italic roun">Touch</span>
                        </span>
                    </blockquote>
                    <div className='flex items-center mb-2'>
                        <IoLocationSharp className='mr-3 text-xl text-text-color' />
                        <span className='text-md font-publicSans tracking-wider font-semibold text-text-color'>Mangal Murti Apartment <br /> Tilker nagar, Hadapsar <br /> pune, Maharastra 411002</span>
                    </div>
                    <div className='flex items-center mb-2'>
                        <MdMarkEmailRead className='mr-3 text-xl text-text-color' />
                        <span className='text-md font-publicSans tracking-wider font-semibold text-text-color'>
                            aryaswaroop027@gmail.com <br /> aryaswaroop9507@gmail.com
                        </span>
                    </div>
                    <div className='flex items-center mb-2'>
                        <IoCallSharp className='mr-3 text-xl text-text-color' />
                        <span className='text-md font-publicSans tracking-wider font-semibold text-text-color'>+91 8340168072</span>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    {[
                        { image: contact },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`aspect-square h-full w-full bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group`}
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContactUs;
