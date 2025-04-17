import React from 'react'
import Navigation from './components/Navigation';


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