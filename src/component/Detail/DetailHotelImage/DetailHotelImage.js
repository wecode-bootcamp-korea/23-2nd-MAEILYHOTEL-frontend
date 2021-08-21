import React from 'react';
import Slider from 'react-slick';

import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const DetailHotelImage = ({ images }) => {
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...setting}>
        {images &&
          images.map((data, idx) => {
            return <HotelImg key={idx} src={data} alt="" />;
          })}
      </Slider>
    </div>
  );
};

const HotelImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;
