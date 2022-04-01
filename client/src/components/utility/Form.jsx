import React from 'react';
import { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';

import BookContext from '../context/BookContext'

//Values for formik
const initialValues = {
    title: '',
    author: '',
    link: '',
    number: ''
}

// @todo Figure out a way to reload the page or load the new book on submit

function Form() {

    const { toggleForm} = useContext(BookContext)
    
    const formik = useFormik({
        initialValues,
        onSubmit:   (values, actions) => {
            axios.post('http://localhost:5000/api/v1/books', values) // Sending user form values to back-end server 
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
            actions.resetForm();
        }
    })

  return (
    <div className= 'form hidden bg-stone-300' id='bookForm'>
        <h2 className='mt-5 uppercase text-lg text-center font-bold'>Add a new book</h2>
        <form className='flex flex-col p-8' id='submitForm' onSubmit={formik.handleSubmit}>
            <label className='p-2 font-semibold'>Enter the title of the book:
                <input 
                    type='text' 
                    id='inputStyle'
                    name='title'
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    required 
                />
            </label>
            <label className='p-2 font-semibold'>Enter the author of the book:
                <input 
                type='text'
                id='inputStyle'
                name='author'
                onChange={formik.handleChange}
                value={formik.values.author}
                required
                />
            </label>
            <label className='p-2 font-semibold'>Enter the URL of the book cover:
                <input 
                type='url'
                id='inputStyle'
                name='link' 
                onChange={formik.handleChange}
                value={formik.values.link}
                required
                />
            </label>
            <label className='p-2 font-semibold'>Enter the number of pages of the book:
                <input 
                type='number'
                id='num'
                className='w-32 mt-2 p-15 rounded'
                name='number' 
                onChange={formik.handleChange}
                value={formik.values.number}
                required
                />
            </label>
            <div className='mt-10 flex justify-arround'>
            <input className='button w-2/4' type="submit" value='submit'/>
            <input className='button w-2/4' type="button" value='Close' onClick = {() => {toggleForm()}, ()=>{window.location.reload()}}/>
            </div>
        </form>
    </div>
  )
}

export default Form