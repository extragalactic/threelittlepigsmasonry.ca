import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.section`
  font-size: 10;
  color: #888;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright &#169; 2017 Three Little Pigs Masonry</p>
    </StyledFooter>
  );
};

export default Footer;
