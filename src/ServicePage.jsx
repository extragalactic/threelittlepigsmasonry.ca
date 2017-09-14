import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SlideShow from 'react-slick';
import './App.css';
import ServiceData from './ServiceData';
import GetQuote from './GetQuote';


const StyledServicePage = styled.section`
  padding: 5px;
  padding-bottom: 30px;
  margin-top: -20px;

  h1 {
    text-align: left;
  }
  p {
    font-size: 1.0em;
    text-align: left;  
  }
`;
const StyledSlideshow = styled(SlideShow)`
  margin: 0px 30px;
`;
const SlickSlide = styled.img`
  width: 97%;
`;
const StyledMain = styled.div`
  padding: 20px 20px;
  text-align: left;

  div {
    margin-top: -15px;
    margin-bottom: -10px;
  }
`;


const Arrow = (props) => {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#841F27' }}
      onClick={onClick}
    />
  );
};

const ServicePage = (props) => {

  const serviceType = props.match.params.type;
  const serviceData = ServiceData.find((service) => { return service.pageName === serviceType; });

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    autoplay: false,
    lazyLoad: false,
    swipe: true,
    swipeToSlide: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [{ breakpoint: 600, settings: { slidesToShow: 1 } }, { breakpoint: 1000, settings: { slidesToShow: 3 } }],
  };

  return (
    <StyledServicePage>
      <h1>{serviceType}</h1>
      <StyledSlideshow {...settings}>
        <div><SlickSlide src="/images/sample-photo-1.jpg" alt="" /></div>
        <div><SlickSlide src="/images/sample-photo-2.jpg" alt="" /></div>
        <div><SlickSlide src="/images/sample-photo-3.jpg" alt="" /></div>
        <div><SlickSlide src="/images/sample-photo-4.jpg" alt="" /></div>
        <div><SlickSlide src="/images/sample-photo-5.jpg" alt="" /></div>
        <div><SlickSlide src="/images/sample-photo-6.jpg" alt="" /></div>
      </StyledSlideshow>
      <StyledMain>
        <h4>{serviceData.subtitle1}</h4>
        <div><p>{serviceData.content1}</p></div>
        <h6>{serviceData.subtitle2}</h6>
        <div><p>{serviceData.content2}</p></div>
      </StyledMain>
      <GetQuote />
    </StyledServicePage>
  );
};

ServicePage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ServicePage;
