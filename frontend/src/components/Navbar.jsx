import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-40" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            className="h-8 w-auto"
                            src={logo}
                            alt="Company Logo"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link to="/" className="text-lg tracking-wide font-publicSans text-text-color2 font-semibold hover:text-bg">
                        Home
                    </Link>
                    <Link to="/courses" className="text-lg tracking-wide font-publicSans text-text-color2  font-semibold hover:text-bg">
                        Courses
                    </Link>
                    <Link to="/resources" className="text-lg tracking-wide font-publicSans text-text-color2  font-semibold hover:text-bg">
                        Resources
                    </Link>
                    <Link to="/news" className="text-lg tracking-wide font-publicSans text-text-color2  font-semibold hover:text-bg">
                        All News
                    </Link>
                    <Link to="/support" className="text-lg tracking-wide font-publicSans text-text-color2  font-semibold hover:text-bg">
                        Support
                    </Link>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to="/login" className="text-lg tracking-wide font-publicSans text-text-color2  font-semibold hover:text-bg">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
