import { createContext, useState, useEffect } from 'react';

const BookContext = createContext();

export const BookProvider = ({children}) => {

    const [book, setBook] = useState()

    // Load all books on first load
    useEffect(() => {
        fetchBooks()
    }, [])

    const fetchBooks = async () => {
        const response = await fetch('http://localhost:5000/api/v1/books')
        const res = await response.json()
        console.log(res)
        const { data } = res;
        setBook(data)
        console.log('this is', data)
    }

    // For the burger menu on small screen sizes
    const handleClick = () => {
        const menu = document.querySelector('#menu');

        menu.classList.toggle('hidden');
    }

    // Function for toggling the add-new-book pop-up
    const toggleForm = () => {
        const form = document.querySelector('#bookForm')

        form.classList.toggle('hidden')
    }


    return <BookContext.Provider value = {{
        book,
        handleClick,
        toggleForm,
    }}>
        {children}
    </BookContext.Provider>
}

export default BookContext;