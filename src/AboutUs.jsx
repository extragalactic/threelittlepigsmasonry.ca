import React from 'react';
import styled from 'styled-components';
import AboutUsFull from './AboutUsFull';

const StyledAboutUs = styled.section`
  background-color: #fff;
  min-height: 200px;
  padding-top: 5px;

  img {
    float: left;
  }

  p {
    font-size: 1.0em;
    text-align: left;
    text-justify: auto;  
    padding-left: 10px;
    padding-right: 10px;  
  }
`;

const AboutUs = () => {
  return (
    <StyledAboutUs>
      <h2>Our Commitment</h2>
      <img src="./images/logo-small.jpg" alt="Three Little Pigs Logo" />
      <p>Family owned and operated, we have been proudly serving homeowners since 2004. Our masonry history begins with working across Canada and the United States in commercial masonry building schools, churches plus commercial and industrial projects.</p>
      <p>In 2004, our estimator and partner launched Three Little Pigs Masonry, a full service masonry company for the homeowner. His many years of experience allow him to help homeowners with many permanent solutions to their problems where other competitors have failed to succeed. If we cannot serve any of your specific construction needs, we can definitely put you in touch with another reputable subcontractor or general contractor who specializes in this field.</p>
      <AboutUsFull />
    </StyledAboutUs>
  );
};

export default AboutUs;
