import React from 'react';
import { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'

import BookContext from '../context/BookContext'

const initialValues = {
    title: '',
    author: '',
    link: '',
    number: ''
}

/*
const validationSchema = Yup.object({
    title: Yup.string().required('Required!'),
    author: Yup.string().required('Required!'),
    link: Yup.string().url('Invalid URL format').required('Required!'),
    number: Yup.number().required('Required!')

})
*/

function Form() {

    const { toggleForm, validateForm } = useContext(BookContext)
    const formik = useFormik({
        initialValues,
        onSubmit: values => {validateForm(values)}
    })

    console.log('Form-Values', formik.values)

  return (
    <div className= 'form hidden bg-stone-300' id='bookForm'>
        <h2 className='mt-5 uppercase text-lg text-center font-bold'>Add a new book</h2>
        <form className='flex flex-col p-8' id='submitForm' onSubmit={formik.handleSubmit}>
            <label className='p-2 font-semibold'>Enter the title of the book:
                <input 
                    type='text' 
                    id='inputStyle title'
                    name='title'
                    onChange={formik.handleChange}
                    value={formik.values.title}
                    required 
                />
            </label>
            <label className='p-2 font-semibold'>Enter the author of the book:
                <input 
                type='text'
                id='inputStyle author'
                name='author'
                onChange={formik.handleChange}
                value={formik.values.author}
                required
                />
            </label>
            <label className='p-2 font-semibold'>Enter the URL of the book cover:
                <input 
                type='url'
                id='inputStyle link'
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
            <input className='button w-2/4' type="button" value='Cancel' onClick = {() => {toggleForm()}}/>
            </div>
        </form>
    </div>
  )
}

export default Form