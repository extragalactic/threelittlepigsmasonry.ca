
import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import StarIcon from 'material-ui/svg-icons/action/grade';
import './App.css';

const StyledItem = styled.div`
padding-left: 10px;
padding-right: 10px;

h6 {
  text-align: left;
  margin: 0;
  padding: 0;
}
p {
  float: left;
  text-align: justify;
  text-justify: auto;
  font-size: 0.9em;
}
`;

const StyledSignature = styled.p`
  color: #777;
  font-style: italic;
`;

const TestimonialCard = (props) => {
  return (
    <LazyLoad height={200}>
      <StyledItem>
        <h6>{props.element.title}</h6>
        {Array(props.element.stars).fill().map((val, i) => {
          return (
            <StarIcon key={i} color={'#D4AF37'} style={{ width: 15, height: 15, float: 'left' }} />
          );
        })
        }
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
