import React from 'react'
import { PiCopyrightFill } from "react-icons/pi";

const Footer = () => {
    return (
        <div class="mt-20">
            {/* <div class="text-center">
                <img src="./images/favi.png" alt="" class="w-20 mx-auto mb-2">
                <div class="w-max flex items-center gap-2 mx-auto">
                    <img src="./images/mail_icon.png" alt="" class="w-6">
                    aryaswaroop027@gmail.com
                </div>
            </div> */}
            <div class="text-center sm:flex items-center justify-between border-t border-text-color2 mx-[10%] mt-12 py-6">
                <p className='font-publicSans text-text-color tracking-wide font-semibold'>CopyRight Recived 2025 Arya swaroop. All rights reserved.</p>
                <ul class="flex items-center gap-5 justify-center mt-4 sm:mt-0">
                    <li><a href="https://github.com/SwaroopArya65" className='font-publicSans text-text-color tracking-wide font-semibold'>GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/arya-swaroop-0a313b1b2" className='font-publicSans text-text-color tracking-wide font-semibold'>LinkedIn</a></li>
                    <li><a href="#" className='font-publicSans text-text-color tracking-wide font-semibold'>Quick Link</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
