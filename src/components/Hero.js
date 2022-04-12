import { width } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Hero = () => {
  return (
    <div className=' d-flex justify-content-center align-items-center '>
      <div
        className='   container-fluid rounded-3 d-flex justify-content-center align-items-center bg-primary  '
        style={{
          height: '500px',
        }}>
        <div className='textContainer p-5 container-fluid d-flex flex-column align-items-start justify-content-center  col-6 justify-content-between align-baseline'>
          <p className='text-warning heroSubtitle'>Live For Fashion</p>
          <Typography variant='h2' color='white' className=''>
            Fashion Up Your Look
          </Typography>
          <Typography variant='body1' color='white' className='mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa non
            sunt, architecto officiis ducimus quisquam sit vel id esse porro
            reiciendis velit incidunt sed ullam sequi. Sequi vitae
            exercitationem maiores fuga.
          </Typography>
          <Button variant='contained' color='secondary' className='mt-3'>
            Shop Now
          </Button>
        </div>
        <div className='textContainer p-5 container-fluid d-flex flex-column align-items-start justify-content-center   col-6'>
          <img src='logo512.png' alt='placeholder' className='h-75' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
