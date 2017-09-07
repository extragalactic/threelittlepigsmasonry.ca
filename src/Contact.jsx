import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.section`
  background-color: #fff;
`;

class Contact extends React.Component {

  render() {
    return(
      <StyledContact>
       <h2>Contact Us</h2>
       <p>Give us a call</p>
      </StyledContact>
    );
  }
}

export default Contact;