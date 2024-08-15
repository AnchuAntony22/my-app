import React from 'react';
import AdvertisementItem from './AdvertisementItem';

const ads = [
  { id: 1, title: 'Ad 1', description: 'This is the first advertisement.' },
  { id: 2, title: 'Ad 2', description: 'This is the second advertisement.' },
  { id: 3, title: 'Ad 3', description: 'This is the third advertisement.' },
  { id: 4, title: 'Ad 4', description: 'This is the fourth advertisement.' },
  { id: 5, title: 'Ad 5', description: 'This is the fifth advertisement.' },
  { id: 6, title: 'Ad 6', description: 'This is the sixth advertisement.' },
  { id: 7, title: 'Ad 7', description: 'This is the seventh advertisement.' },
  { id: 8, title: 'Ad 8', description: 'This is the eighth advertisement.' },
  { id: 9, title: 'Ad 9', description: 'This is the ninth advertisement.' },
];

const AdvertisementList = () => {
  return (
    <section className='adList'>
      <h2>Advertisement List</h2>
      <div className='grid'>
        {ads.map(ad => (
          <AdvertisementItem key={ad.id} ad={ad} />
        ))}
      </div>
    </section>
  );
};

export default AdvertisementList;
