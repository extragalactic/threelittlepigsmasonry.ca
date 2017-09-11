import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import SlideShow from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GetQuote from './GetQuote';

const TopDiv = styled.div`
  width: 100%;
  height: 0px;
  position: relative;
  padding-bottom: 74%;  
  @media (max-width: 1000px) {
    padding-bottom: 72%;  
  }
  @media (max-width: 600px) {
    padding-bottom: 70%;  
  }  

`;
const SlickSlide = styled.img`
  width: 100%;
`;
const StyledCarouselContent = styled.section`
  position: absolute;
  float: left;
  top: 50px;
  margin-left: 20px;
`;
const StyledTagline = styled.img`
  width: 700px;
  @media (max-width: 1000px) {
    width: 500px;
  }
  @media (max-width: 600px) {
    width: 300px;
  }
`;
const StyledQuoteRequest = styled.div`
  text-align: left;
`;


const TopCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    lazyLoad: false,
  };

  return (
    <TopDiv>
      <SlideShow {...settings}>
        <div><SlickSlide src="http://lorempixel.com/800/600/nature/1" alt="" /></div>
        <div><SlickSlide src="http://lorempixel.com/800/600/nature/2" alt="" /></div>
      </SlideShow>
      <StyledCarouselContent>
        <StyledTagline src="./images/tagline.png" alt="" />
        <StyledQuoteRequest>
          <h4>Click here for a quote
            <GetQuote />
            <br />
          or give us a call at 905-508-0500</h4>
        </StyledQuoteRequest>
      </StyledCarouselContent>
    </TopDiv>
  );
};

export default TopCarousel;
