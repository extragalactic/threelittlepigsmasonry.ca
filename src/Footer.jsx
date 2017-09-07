import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.section`
  font-size: 10;
  color: #888;
`;

class Footer extends React.Component {

  render() {
    return(
      <StyledFooter>
       <p>Copyright 2017 Three Little Pigs Masonry</p>
      </StyledFooter>
    );
  }
}

export default Footer;