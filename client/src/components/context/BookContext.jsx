import { createContext, useState, useEffect } from 'react';

import Form from '../utility/Form'

const BookContext = createContext();

export const BookProvider = ({children}) => {

    const [book, setBook] = useState()

    useEffect(() => {
        fetchBooks()
    }, [])

    const fetchBooks = async () => {
        const response = await fetch('http://localhost:5000/api')
        const data = await response.json()
        
        setBook(data)
    }

    const handleClick = () => {
        const menu = document.querySelector('#menu');

        menu.classList.toggle('hidden');
    }

    const toggleForm = () => {
        const form = document.querySelector('#bookForm')

        form.classList.toggle('hidden')
    }

    const validateForm = (e) => {
        console.log(e)
    }

    return <BookContext.Provider value = {{
        book,
        handleClick,
        toggleForm,
        validateForm
    }}>
        {children}
    </BookContext.Provider>
}

export default BookContext;