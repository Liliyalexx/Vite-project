import React from 'react';

function Product({ item }) {
  return (
    <div className='productContainer'>
      <div className='product'>
        <img
          src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.ca%2Fpin%2F74872412531393161%2F&psig=AOvVaw0bePrD6FeZ_0PCVJ1EGySX&ust=1719092897108000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMCxmJ7W7YYDFQAAAAAdAAAAABAE'
          alt=''
          className='p_img'
        />
        <p className='p_desc'>{item}</p>

        <p className='p_price'>$9.99</p>

        <div className='starBox'>
          <img
            src='https://www.freeiconspng.com/thumbs/star-icon/black-star-icon-6.png'
            alt=''
            className='star'
          />
          <img
            src='https://www.freeiconspng.com/thumbs/star-icon/black-star-icon-6.png'
            alt=''
            className='star'
          />
          <img
            src='https://www.freeiconspng.com/thumbs/star-icon/black-star-icon-6.png'
            alt=''
            className='star'
          />
          <img
            src='https://www.freeiconspng.com/thumbs/star-icon/black-star-icon-6.png'
            alt=''
            className='star'
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
