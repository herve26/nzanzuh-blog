/* create a next.js page which will be accessible at /form and will render a form containing an email and password field with a submit button. The form should be styled using tailwindcss. The form should be submitted to a serverless function which will log the email and password to the console.*/
// Path: pages\form.js
import { useEffect } from 'react';
import kwesforms from 'kwesforms';

import Layout, { GradientBackground } from '../components/Layout';
 
export default function Form() {
    
    useEffect(() => {
        kwesforms.init();
    }, []);

  return (
    <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-28 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-center w-full max-w-md px-4 py-8 mt-24 overflow-hidden rounded-lg sm:px-6 lg:px-8 md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
                 
                <div className="w-full">
                <h2 className="text-2xl md:text-3xl">
                    Sign in to your account
                </h2>
                <form className="kwes-form mt-8 space-y-6" action="https://kwesforms.com/api/foreign/forms/dGXwVr5jwK6XTOu8g5FE">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="email-address" className="sr-only">
                        Email address
                        </label>
                        <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">
                        Password
                        </label>
                        <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                        />
                    </div>
                    </div>
                    <div className="flex items-center justify-between
                    ">
                    <div className="flex items-center">
                        <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                        >
                        Remember me
                        </label>
                    </div>
                    <div className="text-sm">
                        <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                        Forgot your password?
                        </a>
                    </div>
                    </div>
                    <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        {/* Heroicon name: solid/lock-closed */}
                        <svg
                            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                            fillRule="evenodd"
                            d="M5 8a3 3 0 016 0v1h1a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2h1V8zm3 0V7a1 1 0 00-2 0v1H5a3 3 0 00-3 3v5a3 3 0 003 3h10a3 3 0 003-3v-5a3 3 0 00-3-3h-2z"
                            clipRule="evenodd"
                            />
                        </svg>
                        </span>
                        Sign in
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
    </Layout>
  );
}
