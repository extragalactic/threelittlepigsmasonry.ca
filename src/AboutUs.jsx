import React from 'react';
import styled from 'styled-components';

const StyledAboutUs = styled.section`
  background-color: #fff;
`;

class AboutUs extends React.Component {

  render() {
    return(
      <StyledAboutUs>
       <h2>Our Commitment</h2>
       <p>We are awesome. Let me tell you how awesome we are.</p>
      </StyledAboutUs>
    );
  }
}

export default AboutUs;
