import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import SlideShow from 'react-slick';
import RaisedButton from 'material-ui/RaisedButton';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './TopCarousel.css';

const SlickSlide = styled.img`
  width: 100%;
`;
const StyledCarouselContent = styled.section`
  position: absolute;
  float: left;
  top: 100px;
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


class TopCarousel extends React.Component {
  // static propTypes = {
  // }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      autoplay: true,
    };

    return(
      <div>
        <SlideShow {...settings}>
          <div><SlickSlide src="http://lorempixel.com/800/600/nature/1" alt=""/></div>
          <div><SlickSlide src="http://lorempixel.com/800/600/nature/2" alt=""/></div>
        </SlideShow>
        <StyledCarouselContent>
          <StyledTagline src="./images/tagline.png" alt=""/>
            <StyledQuoteRequest>
             <h4>Click here for a quote
              <RaisedButton label="Get Quote" primary={true} />
              <br/>
             or give us a call at 905-508-0500</h4>
          </StyledQuoteRequest>
        </StyledCarouselContent>
      </div>
    );
  }
}

export default TopCarousel;
