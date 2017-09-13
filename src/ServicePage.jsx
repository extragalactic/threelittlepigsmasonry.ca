import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './App.css';
// import ServiceData from './ServiceData';

const StyledServicePage = styled.section`
  padding: 5px;

  p {
    font-size: 1.0em;
    text-align: left;  
  }
`;

const ServicePage = (props) => {
  return (
    <StyledServicePage>
      <p>Service name: {props.match.params.type}</p>
    </StyledServicePage>
  );
};

ServicePage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ServicePage;

/*
const ServicePage = (props) => {
  return (
    <StyledServicePage>
      <h3>{ServiceData[props.serviceName].title}</h3>
    </StyledServicePage>
  );
};



export default ServicePage;
*/