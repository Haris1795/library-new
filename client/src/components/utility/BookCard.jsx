import React from 'react'

function BookCard() {
  return (
    <div className='bg-white rounded overflow-hidden shadow-md hover:shadow-lg'>
        <img className='w-full h-48 sm:h-64 object-cover' src="https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/cM-QxVEndybiiXmT3VEy4A819HY=/800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/AVXJO47DXDANVHVWAAHEF5QBVE.jpg" alt='placeholder'/>
        <div className='font-bold'>
            <span>Book title:</span>
            <span className='block'>Book Author:</span>
            <span>Number of pages:</span>
        </div>
    </div>
  )
}

export default BookCard