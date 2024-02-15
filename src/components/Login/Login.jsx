import React from 'react';
import { Link } from 'react-router-dom';

function Signin() {
    return (
        <div className="h-auto flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                </div>
                <form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign in
                        </button>
                    </div>
                </form>

                {/* Signup Section */}
                <div className="mt-6">
                    <p className="text-center text-sm text-gray-600">Don't have an account yet?</p>
                    <Link to="/register" className="block text-center mt-2 text-sm font-medium text-indigo-600 hover:text-indigo-500">Sign up</Link>
                </div>

                {/* Additional Content */}
                <div className="mt-8 border-t border-gray-200 pt-8">
                    <p className="text-center text-sm text-gray-600">Or continue with</p>
                    <div className="mt-6 flex justify-center space-x-4">
                        <button type="button" className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500">
                            <img src="/facebook.png" alt="facebook" className="w-8 h-8" />
                        </button>
                        <button type="button" className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500">
                            <img src="/google.png" alt="instagram" className="w-7 h-7" />
                        </button>
                        <button type="button" className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500">
                            <img src="/instagram.png" alt="instagram" className="w-8 h-8" />
                        </button>   
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;
