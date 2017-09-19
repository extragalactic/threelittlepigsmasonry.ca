import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SlideShow from 'react-slick';
import ArrowIcon from 'material-ui/svg-icons/image/navigate-next';

// import RaisedButton from 'material-ui/RaisedButton';
import './App.css';
import ServiceData from './ServiceData';
import history from './history';


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
  margin: -20px 30px;
`;
const SlickSlide = styled.img`
  width: 97%;
`;
const StyledMain = styled.div`
  padding: 20px 5px;
  text-align: left;

  div {
    margin-top: -15px;
    margin-bottom: -10px;
  }
`;


const Arrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#841F27' }}
      onClick={onClick}
    />
    // <ArrowIcon color={'#841F27'} style={{ width: 15, height: 15, float: 'left' }} />
  );
};
Arrow.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};


class ServicePage extends React.Component {
  static gotoSection(section) {
    history.push(`/services/${section}`);
  }

  constructor(props) {
    super(props);

    this.serviceType = props.serviceType;
    this.serviceData = ServiceData.find((service) => { return service.pageName === this.serviceType; });

    this.settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: true,
      fade: false,
      autoplay: false,
      lazyLoad: false,
      swipe: true,
      swipeToSlide: true,
      nextArrow: <Arrow />,
      prevArrow: <Arrow />,
      responsive: [{ breakpoint: 600, settings: { slidesToShow: 2 } }, { breakpoint: 1000, settings: { slidesToShow: 2 } }],
    };
  }

  render() {
    return (
      <StyledServicePage>
        <h1>{this.serviceData.title}</h1>
        <StyledSlideshow {...this.settings}>
          <div><SlickSlide src="/images/before-and-after-pics/parging1-before.jpg" alt="" /></div>
          <div><SlickSlide src="/images/before-and-after-pics/parging1-after.jpg" alt="" /></div>
          <div><SlickSlide src="/images/before-and-after-pics/parging2-before.jpg" alt="" /></div>
          <div><SlickSlide src="/images/before-and-after-pics/parging2-after.jpg" alt="" /></div>
          <div><SlickSlide src="/images/before-and-after-pics/wall1-before.jpg" alt="" /></div>
          <div><SlickSlide src="/images/before-and-after-pics/wall1-after.jpg" alt="" /></div>
        </StyledSlideshow>
        <StyledMain>
          <h4>{this.serviceData.subtitle1}</h4>
          <div><p>{this.serviceData.content1}</p></div>
          <h6>{this.serviceData.subtitle2}</h6>
          <div><p>{this.serviceData.content2}</p></div>
        </StyledMain>
      </StyledServicePage>
    );
  }
}

ServicePage.propTypes = {
  serviceType: PropTypes.string.isRequired,
};

export default ServicePage;
