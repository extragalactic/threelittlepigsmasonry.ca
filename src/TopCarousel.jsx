import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SlideShow from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RaisedButton from 'material-ui/RaisedButton';
import PhoneIcon from 'material-ui/svg-icons/communication/call';

const TopDiv = styled.div`
  width: 100%;
  height: 0px;
  position: relative;
  padding-bottom: 62%;  
  zIndex: 100;
  @media (max-width: 1000px) {
    padding-bottom: 61%;  
  }
  @media (max-width: 600px) {
    padding-bottom: 59%;  
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
  margin-top: -20px;
  margin-left: -15px;
  padding-bottom: 10px;
  width: 700px;
  @media (max-width: 1000px) {
    width: 500px;
  }
  @media (max-width: 600px) {
    width: 300px;
    margin-top: -50px;
  }
`;
const StyledQuoteRequest = styled.div`
  text-align: left;
  h4 {
    color: #fff;
    padding: 0;
    margin: 0;
    text-shadow: 2px 2px #444;
  }
  p {
    color: #fff;
    text-shadow: 1px 1px #444;    
  }

  @media (max-width: 600px) {
    margin-top: -10px;
    h4 {
      font-size: 1.0em;
    }
  }
`;

const TopCarousel = (props) => {
  const openChat = props.openChat;

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
        <div><SlickSlide src="./images/sample-photo-1.jpg" alt="" /></div>
        <div><SlickSlide src="./images/sample-photo-2.jpg" alt="" /></div>
        <div><SlickSlide src="./images/sample-photo-3.jpg" alt="" /></div>
      </SlideShow>
      <StyledCarouselContent>
        <StyledTagline src="./images/tagline-modified.png" alt="Warranties that blow the others away!" />
        <StyledQuoteRequest>
          <h4>Click here for a quote!</h4>
          <RaisedButton label="Get Quote" secondary onClick={openChat} />
          <br />
          <PhoneIcon color={'#fff'} style={{ width: 50, height: 50, float: 'left' }} />
          <p>or give us a call at:</p>
          <h4>905-508-0500 or 416-595-0100</h4>
        </StyledQuoteRequest>
      </StyledCarouselContent>
    </TopDiv>
  );
};

TopCarousel.propTypes = {
  openChat: PropTypes.func.isRequired,
};

export default TopCarousel;
