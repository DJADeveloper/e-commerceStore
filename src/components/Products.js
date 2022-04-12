import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <div >
      <div className='row g-4'>
        <div className='col'>
          <ProductCard />
        </div>
        <div className='col'>
          <ProductCard />
        </div>
        <div className='col'>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Products;
