import React from 'react';

function MainDisplay() {
  return (
    <div className='mainContainer'>
      <div className='textBox'>
        <h1 className='txtTitle'>Travel in Paris</h1>

        <p className='lorem'>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat est
          voluptate totam.
        </p>
      </div>
      <img
        src='Paris.gif'
        alt='Paris GIF'
        className='profilePic'
      />
    </div>
  );
}

export default MainDisplay;
