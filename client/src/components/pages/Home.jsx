import React from 'react'
import BookCard from '../utility/BookCard'

function Home() {
  return (
    <div>
      <div className='flex justify-center md:justify-end p-4'>
          <a href="/" className='text-primary-100 rounded py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider border-primary-200 border-2 hover:bg-primary-100 hover:text-white'>Log in</a>
          <a href="/" className='text-primary-100 ml-3 rounded py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider border-primary-200 border-2 hover:bg-primary-100 hover:text-white'>Sign up</a>
      </div>
      <header className='mb-16 border-b'>
          <h2 className='text-6xl font-semi-bold'>Books</h2>
      </header>
      <div> 
        <div className='mt-8 grid lg:grid-cols-8 gap-10 content-center'>
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 cursor-pointer ml-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        </div>
      </div>
    </div>
  )
}

export default Home