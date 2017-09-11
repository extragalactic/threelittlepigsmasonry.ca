import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import './App.css';

const StyledItem = styled.div`
padding-left: 10px;
padding-right: 10px;

h5 {
  text-align: left;
}
p {
  text-align: justify;
  text-justify: auto;
}
`;

const StyledSignature = styled.p`
color: #777;
font-style: italic;
`;

const TestimonialCard = (props) => {
  return (
    <LazyLoad height={100}>
      <StyledItem>
        <h5>{props.element.title}</h5>
        <p>{props.element.text}</p>
        <StyledSignature>{props.element.name} -- {props.element.location}</StyledSignature>
      </StyledItem>
    </LazyLoad>
  );
};

TestimonialCard.propTypes = {
  element: PropTypes.object.isRequired,
};

export default TestimonialCard;
