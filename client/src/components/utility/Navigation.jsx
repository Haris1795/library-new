import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import BookContext from '../context/BookContext'

function Navigation() {
  const { handleClick } = useContext(BookContext)
  return (
    <nav className='text-right'>
        <div className='p-1 flex justify-between items-center'>
            <div className=''>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h1 className='font-bold uppercase p-4 border-b border-gray-300 inline-block hover:text-gray-500'>
                    <Link to="/" className='text-sm md:text-xl'>My Library</Link>
                </h1>
            </div>
            <div className='px-4 cursor-pointer md:hidden' id='burger' onClick={() => {handleClick()}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </div>
        <ul className='mt-8 text-lg font-bold hidden md:block' id='menu'>
            <li className='py-1'>
                <Link to="/" className='px-4 flex justify-end hover:border-r-4 border-primary-200'>
                    <span className=''>Home</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </Link>
            </li>
            <li className='py-1'>
                <Link to="/about" className='px-4 flex justify-end hover:border-r-4 border-primary-100'>
                    <span>About</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </Link>
            </li>
            <li className='py-1'>
                <Link to="/contact" className='px-4 flex justify-end hover:border-r-4 border-secondary-200'>
                    <span>Contact</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation