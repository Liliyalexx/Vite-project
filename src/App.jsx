import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainDisplay from './components/MainDisplay';
import Product from './components/Product';
// ----------------[Requires/Imports]

function App() {
  let products = {
    shirts: ['Black Tee', 'white Tee'],
    pants: [],
  };

  return (
    <>
      <Navbar />
      <MainDisplay />
      <div className='producter'>
        <Product item={products.shirts[0]} />
        <Product item={products.shirts[1]} />
        <div className='column'>
          <Product item={products.shirts[0]} />
          <Product item={products.shirts[1]} />
        </div>

      </div>
    </>
  );
}

export default App;
