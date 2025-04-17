import React from 'react'
import Navigation from '/Users/keshavkumar/Desktop/untitled folder 5/my-app/src/components/Navigation.jsx';

import HomePages from './components/pages/HomePages'
import './index.css';
import Footer from './components/HomeSectionCard/Footer';
import Product from './components/pages/Product';

function App() {
  return (
    <div className='App'>
      
      <Navigation/>
      <div>
      <HomePages/>
      <Product/>
      </div>
      <Footer/>
    </div>
  )
}

export default App