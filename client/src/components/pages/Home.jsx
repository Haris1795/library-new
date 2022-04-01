import React from 'react'

import BookCard from '../utility/BookCard'
import AddBook from '../utility/AddBook'

function Home() {
  return (
    <div>
      <div className='flex justify-center md:justify-end p-4'>
          <a href="/" className='button'>Log in</a>
          <a href="/" className='button ml-3'>Sign up</a>
      </div>
      <header className='mb-16 border-b'>
          <h2 className='text-6xl font-semi-bold'>Books</h2>
      </header>
      <div> 
        <div className='mt-8 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-10 content-center'>
          <BookCard arr='0' />
          <AddBook />
        </div>
      </div>
    </div>
  )
}

export default Home