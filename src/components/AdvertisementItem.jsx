import React from 'react';

const AdvertisementItem = ({ ad }) => {
  return (
    <div className='card'>
      <div className='imagePlaceholder'>150 x 150</div>
      <div className='content'>
        <h3>{ad.title}</h3>
        <p>{ad.description}</p>
        <p>Contact: ***</p>
        <button className='button'>Details</button>
      </div>
    </div>
  );
};

export default AdvertisementItem;