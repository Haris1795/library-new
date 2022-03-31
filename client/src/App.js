import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { BookProvider } from './components/context/BookContext'
import Navigation from './components/utility/Navigation'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Footer from './components/utility/Footer'
import Form from './components/utility/Form'


function App() {
  return (
    <BookProvider>
      <Router>
        <div className='flex justify-center'>
          <Form />
        </div>
        <div className = 'font-body  text-gray-600 md:grid md:grid-cols-7 auto-cols-max'> 
          <div className='md:col-span-1 md:flex md:justify-end bg-stone-300'>
            <Navigation />
          </div>
          <main className='px-16 py-10 md:col-span-6  bg-gray-100'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </Router>
    </BookProvider>
  );
}

export default App;
