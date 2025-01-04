import React from 'react'
import GradientBg from './GradientBg';

const ContactUs = () => {
    return (
        <div className='relative isolate px-6 pt-14 pb-14 lg:px-40 bg-zinc-50'>
            <GradientBg position="top-[calc(100%-13rem)] sm:top-[calc(100%-40rem)]" />
            <div>
                <div>
                    <blockquote class="text-4xl tracking-wider font-semibold font-playfair text-start text-slate-900">
                        Get In
                        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-bg relative inline-block ml-2">
                            <span class="relative text-white italic roun">Touch</span>
                        </span>
                    </blockquote>

                </div>
                <div></div>
            </div>
        </div>
    )
}

export default ContactUs;
