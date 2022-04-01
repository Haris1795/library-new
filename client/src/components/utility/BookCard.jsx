import React from 'react'
import { useContext } from 'react';
import Spinner from './spinner';

import BookContext from '../context/BookContext'

function BookCard() {
  const { book } = useContext(BookContext)

  // In case the server is too slow to respond and there is no data in book
  if (!book){
    return (
      <Spinner />
    )
  }

  return book.map((item) => (
    <div className='bg-white rounded overflow-hidden shadow-md hover:shadow-lg'>
        <img className='w-full h-48 sm:h-64 object-cover' src={item.link} alt='placeholder'/>
        <div className='font-bold'>
            <span className='text-lg'>{item.title}</span>
            <span className='block text-sm'>{item.author}</span>
            <span className='text-sm'>Page No. {item.number}</span>
        </div>
    </div>
  ))
}

export default BookCard