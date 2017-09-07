import React from 'react';
import styled from 'styled-components';

const StyledTestimonials = styled.section`
  background-color: #fff;
`;

class Testimonials extends React.Component {

  render() {
    return(
      <StyledTestimonials>
       <h2>Testimonials</h2>
       <p>Here is a bunch of testimonials.</p>
      </StyledTestimonials>
    );
  }
}

export default Testimonials;