import React from 'react';
import Image from 'next/image';
import landingStyles from '/styles/landing.module.css';
import Plane from '/public/swPlaneDraft.png';

const CloudContainer = () => (
  <div className='cloudWrapper' >
    <div className='cloudContainer' >
      <div className='cloudInner' >
        <div className='x3' >
          <div className='cloud' />
        </div>
        <div className='x2' style={{ animationDelay: '2s' }} >
          <div className='cloud' />
        </div>
        <div className='x1' style= {{ animationDelay: '2s' }} >
          <div className='cloud' />
        </div>
      </div>
    </div>
    <div className='cloudContainer' >
      <div className='cloudInner' >
        <div className='x3 xPad500' style={{ animationDelay: '1s' }} >
          <div className='cloud' />
        </div>
        <div className='x2 xPad500' >
          <div className='cloud' />
        </div>
        <div className='x1 xPad500' style= {{ animationDelay: '4s' }} >
          <div className='cloud' />
        </div>
        <div className='x1' >
          <div className='cloud' />
        </div>
      </div>
    </div>
  </div>
);

const PlaneContainer = () => {
  return (
    <>
      <div className={landingStyles.daylight1} />
      <div className={landingStyles.daylight2} />
      <div className={landingStyles.planeWrapper} >
        <CloudContainer />
        <div className={landingStyles.planeContainer} >
          <Image src={Plane} alt='southwest plane' />
        </div>
      </div>
    </>
  );
};

export default PlaneContainer;
