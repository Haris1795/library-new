import { createContext, useState, useEffect } from 'react';

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

    return <BookContext.Provider value = {{
        book,
        handleClick,
    }}>
        {children}
    </BookContext.Provider>
}

export default BookContext;