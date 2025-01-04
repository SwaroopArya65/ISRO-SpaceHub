import React from 'react';
import GradientBg from '../components/GradientBg';
import Navbar from '../components/Navbar';
import InfoBanner from './../components/InfoBanner';
import UserDepartment from '../components/UserDepartment';
import ContactUs from '../components/ContactUs';
import OrganizerBoard from '../components/OrganizerBoard';

const Index = () => {
    return (
        <div className="relative bg-white">
            <Navbar />
            <div className="relative isolate px-6 pt-14 lg:px-40">
                <GradientBg position="-top-40 sm:-top-80" />
                <div className="mx-auto max-w-customeweight py-32 sm:py-48 lg:py-56">
                    <div className="sm:mb-8 sm:flex sm:justify-center mb-6">
                        <div className="justify-center relative font-publicSans rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Upcoming: Space & Technology Awareness Training Programme-2025 (START-2025)
                            <a href="#" className="font-semibold text-indigo-600">
                                <span className="absolute inset-0" aria-hidden="true"></span> Read more
                                <span aria-hidden="true">&nbsp; &rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-center max-w-3xl">
                        <h1 className="text-5xl font-playfair tracking-wide text-gray-900 sm:text-7xl">
                            SpaceHub: Inspiring the Next Generation of Space Innovators
                        </h1>
                        <p className="mt-8 text-lg font-publicSans tracking-wide font-boldweight text-gray-500 sm:text-xl">
                            Empowering students and entrepreneurs with interactive courses, simulations, resources, forums, and guidance to excel in space science and technology.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-bg px-3.5 py-2.5 text-lg font-publicSans tracking-wider text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get current news
                            </a>
                            <a href="#" className="text-lg font-publicSans tracking-wider text-bg">
                                About us<span aria-hidden="true">&nbsp; →</span>
                            </a>
                        </div>
                    </div>
                </div>
                <GradientBg position="top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)]" />
                <div>
                    <InfoBanner />
                </div>
                <div>
                    <UserDepartment />
                </div>
                <div>
                    <OrganizerBoard />
                </div>
            </div>
            <div>
                <ContactUs />
            </div>
        </div>
    );
};

export default Index;
