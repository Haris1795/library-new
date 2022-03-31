import React from 'react'
import { useContext } from 'react';

import BookContext from '../context/BookContext'

function AddBook() {

    const { toggleForm } = useContext(BookContext)

  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 cursor-pointer ml-10  rounded-full hover:bg-gray-200" onClick = {() => {toggleForm()}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
    </div>
  )
}

export default AddBook