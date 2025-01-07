import React from 'react'

const Login = () => {
    return (
        <div className="bg-[url('./assets/bg.jpg')] bg-no-repeat bg-cover">
            <div className="h-screen flex justify-center items-center">
                <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
                    <h1 className="text-3xl font-playfair tracking-wider font-bold mb-8 text-center">Login Account</h1>
                    <form>
                        <div className="mb-4">
                            <label className="block font-publicSans tracking-wide font-semibold text-slate-900 mb-2" for="email">
                                Email Address
                            </label>
                            <input
                                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-publicSans"
                                id="email" type="email" placeholder="Enter your email address" />
                        </div>
                        <div className="mb-4">
                            <label className="block font-publicSans tracking-wide font-semibold text-slate-900 mb-2" for="password">
                                Password
                            </label>
                            <input
                                className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline font-publicSans"
                                id="password" type="password" placeholder="Enter your password" />
                            <a className="text-gray-600 hover:text-gray-800 font-publicSans tracking-wide" href="#">Forgot your password?</a>
                        </div>
                        <div className="mb-6">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-playfair tracking-wider"
                                type="button">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
