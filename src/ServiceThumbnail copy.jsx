import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload'; // *** not working yet ***
import PropTypes from 'prop-types';
import './App.css';

const StyledServiceThumbnail = styled.section`
  padding-left: 5px;
  padding-right: 5px;
  width: 240px;

  .p {
    font-size: 6px;
  }
`;

const ServiceThumbnail = (props) => {
  return (
    <LazyLoad height={100}>
      <StyledServiceThumbnail>
        <h3>{props.title}</h3>
        <a href={props.link}><img src={props.imgSrc} alt="" /></a>
        <p>{props.description}</p>
        <a href={props.link}><p>Read More...</p></a>
      </StyledServiceThumbnail>
    </LazyLoad>
  );
};

ServiceThumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ServiceThumbnail;
