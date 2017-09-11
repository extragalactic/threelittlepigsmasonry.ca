import React from 'react';
import styled from 'styled-components';
import GetQuote from './GetQuote';

const StyledContact = styled.section`
  background-color: #fff;
`;

const Contact = () => {
  return (
    <StyledContact>
      <h2>Contact Us</h2>
      <p>Give us a call</p>
      <GetQuote />
    </StyledContact>
  );
};

export default Contact;
