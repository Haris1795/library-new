import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { BookProvider } from './components/context/BookContext'
import Navigation from './components/utility/Navigation'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Footer from './components/utility/Footer'

function App() {
  return (
    <BookProvider>
      <Router>
        <div className = 'font-body  text-gray-600 md:grid grid-cols-12'> 
          <div className='md:col-span-2 md:flex md:justify-end bg-stone-300'>
            <Navigation />
          </div>
          <main className='px-16 py-10 md:col-span-10 bg-gray-100'>
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
