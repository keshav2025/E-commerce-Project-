import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from './HomeSectionCard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


const HomeSectionCarousel = ({data ,sectionNane}) => {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
  };

  const items = data.slice(0,10).map((item) => <HomeSectionCard product={item} />);

  const slidePrev = () => {
    carouselRef.current?.slidePrev();
  };

  const slideNext = () => {
    carouselRef.current?.slideNext();
  };

  return (
    <div className="relative w-full bg-gray-100 py-10 px-4 overflow-hidden">
        <h2 className='text2xl font-extrabold text-gray-800 py-5'>{sectionNane}</h2>
      <AliceCarousel
        mouseTracking
        infinite
        disableButtonsControls
        disableDotsControls
        items={items}
        responsive={responsive}
        ref={carouselRef}
      />

      {/* Previous Button */}
      <button
        aria-label="previous"
        onClick={slidePrev}
       className="z-50 absolute left-0 top-32 -translate-x-1/2 rotate-60 p-2 m-10 text-white bg-gray-800 rounded-full hover:bg-gray-700"
      >
        <ChevronLeftIcon />
      </button>

      {/* Next Button */}
      <button
        aria-label="next"
        onClick={slideNext}
        className="z-50 absolute right-0 top-32 -translate-x-1/2 rotate-120 p-2 m-10 text-white bg-gray-800 rounded-full hover:bg-gray-700"
        >
        <ChevronLeftIcon sx={{ transform: 'rotate(180deg)' }} />
      </button>
    </div>
  );
};

export default HomeSectionCarousel;
