
import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import StarIcon from 'material-ui/svg-icons/action/grade';

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
  padding-bottom: 15px;
  margin-top: -5px;
`;

const TestimonialCard = (props) => {
  return (
    <LazyLoad height={200}>
      <StyledItem>
        <h6>{props.review.title}</h6>
        {Array(props.review.stars).fill().map((val, i) => {
          return (
            <StarIcon key={i} color={'#D4AF37'} style={{ width: 15, height: 15, float: 'left' }} />
          );
        })
        }
        <p>{props.review.text}</p>
        <StyledSignature>
          {props.review.name}
        </StyledSignature>
      </StyledItem>
    </LazyLoad>
  );
};

TestimonialCard.propTypes = {
  review: PropTypes.object.isRequired,
};

export default TestimonialCard;
