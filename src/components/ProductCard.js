import React from 'react';

const ProductCard = () => {
  return (
    <div className='bg-dark p-4 text-light my-4 d-flex justify-content-start flex-column align-items-center rounded-3'>
      <p className='text-start fs-4'>Product Title</p>
      <img src='basquiat.png' alt='image' style={{ height: '280px' }} />
      <p className='mt-3 '>
        Description: Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Nostrum, quis?
      </p>
    </div>
  );
};

export default ProductCard;
