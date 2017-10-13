import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SlideShow from 'react-slick';
import RaisedButton from 'material-ui/RaisedButton';
import PhoneIcon from 'material-ui/svg-icons/communication/call';
import MediaQuery from 'react-responsive';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const location = window.location;
const TopDiv = styled.div`
  width: 100%;
  height: 0px;
  position: relative;
  padding-bottom: 62%;
  zindex: 100;
  @media (max-width: 1000px) {
    padding-bottom: 61%;
  }
  @media (max-width: 600px) {
    padding-bottom: 59%;
  }
`;
const SlickSlide = styled.img`width: 100%;`;
const StyledCarouselContent = styled.section`
  position: absolute;
  float: left;
  top: 50px;
  margin-left: 20px;
`;
const StyledTagline = styled.img`
  margin-top: -50px;
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
  text-align: center;

  h4 {
    color: #fff;
    margin: 0px 0px 5px 0px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px;
    border-radius: 0.5em;
  }
  p {
    color: #fff;
    text-shadow: 1px 1px #444;
  }
  > div {
    width: 245px;
  }
  @media (max-width: 600px) {
    margin-top: -35px;
    h4 {
      font-size: 1em;
    }
  }
`;
const StyledPhoneSection = styled.div`
  padding: 3px 3px 0px 10px;
  margin-top: 5px;
  background-color: rgba(0,0,0,0.5);
  border-radius: 0.5em;

  h6 {
    color: #fff;
    font-size: 1.0em !important;
    padding-top: 5px;
    padding-bottom: 20px;
    margin-top -5px;
  }  
`;

const TopCarousel = (props) => {
  const openChat = props.openChat;

  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    lazyLoad: false,
    pauseOnHover: false,
  };
  /*
  const NineOhFive = () => {
    return location.assign('tel:+19055080500');
  };
  const FourOneSix = () => {
    return location.assign('tel:+14165950100');
  };
  */
  return (
    <TopDiv>
      <SlideShow {...settings}>
        <div><SlickSlide src="/images/intro/intro2.jpg" alt="" /></div>
        <div><SlickSlide src="/images/intro/intro4.jpg" alt="" /></div>
        <div><SlickSlide src="/images/intro/intro1.jpg" alt="" /></div>
        <div><SlickSlide src="/images/intro/intro3.jpg" alt="" /></div>
      </SlideShow>
      <StyledCarouselContent>
        <MediaQuery minWidth={601}>
          <StyledTagline src="/images/wolf-blow.png" alt="Warranties that blow the others away!" />
        </MediaQuery>
        <StyledQuoteRequest>
          <StyledPhoneSection>
            <RaisedButton
              label="Click here for a quote!"
              secondary
              onClick={openChat}
              backgroundColor={'blue'}
              labelColor={'blue'}
              buttonStyle={{
                backgroundColor: '#a65959',
                borderRadius: 20,
                fontFamily: 'sans-serif',
              }}
              style={{
                borderRadius: 20,
                marginTop: 10,
                fontFamily: 'sans-serif',
              }}
            />
            <PhoneIcon color={'#fff'} style={{ width: 50, height: 50, float: 'left' }} />
            <p>or give us a call at:</p>
            <h6>
              <a href="tel:+19055080500">905-508-0500</a> or <a href="tel:+14165950100">416-595-0100</a>
            </h6>
          </StyledPhoneSection>
        </StyledQuoteRequest>
      </StyledCarouselContent>
    </TopDiv>
  );
};

//  <a onClick={NineOhFive}>905-508-0500</a> or <a onClick={FourOneSix}>416-595-0100</a>

TopCarousel.propTypes = {
  openChat: PropTypes.func.isRequired,
};

export default TopCarousel;
