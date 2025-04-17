import React from 'react';
import homeCarouselData from './pages/homeCarouselData'; // adjust path as needed

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const HomeCarousel = () => {
  console.log("homeCarouselData is:", homeCarouselData);

  const items = homeCarouselData.map((item, index) => (
    <img
      key={index}
      className='cursor-pointer -z-10 mx-auto'
      role='presentation'
      src={item.image}
      alt={`Slide ${index + 1}`}
      style={{ width: "1413px", height: "550px", objectFit: "cover" }}
    />
  ));

  return (
    <div>
      <AliceCarousel
        autoPlay
        autoPlayInterval={1000}
        infinite
        disableButtonsControls
        disableDotsControls
        items={items}
      />
    </div>
  );
};

export default HomeCarousel;
