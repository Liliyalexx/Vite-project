import React from 'react';
import NavTab from '../components/NavTab';
function Navbar() {
  let categories = ['Home', 'About', 'Products'];

  return (
    <div className='grandparent'>
      <img
        className='logo'
        src='https://media.tenor.com/HEvOf8u94n8AAAAi/europe-travel.gif'
      />
      <div className='navBtns'>
        <NavTab title={categories[0]} />
        <NavTab title={categories[1]} />
        <NavTab title={categories[2]} />
      </div>
    </div>
  );
}

export default Navbar;
