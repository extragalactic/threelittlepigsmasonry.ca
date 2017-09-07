import React from 'react';
import styled from 'styled-components';
import './App.css';
import ServiceThumbnail from './ServiceThumbnail';

const StyledServicesGrid = styled.section`
  padding-top: 15px;
`;
const StyledGridContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class ServicesGrid extends React.Component {

  render() {
    return(
      <StyledServicesGrid>
        <div><h2>Our Services</h2></div>
        <StyledGridContainer>
          <ServiceThumbnail imgSrc="http://lorempixel.com/240/150/city/1" title="Chimneys & Brick" description="This is the first service"/>
          <ServiceThumbnail imgSrc="http://lorempixel.com/240/150/city/2" title="Concrete" description="This is the second service"/>
          <ServiceThumbnail imgSrc="http://lorempixel.com/240/150/city/3" title="Foundation" description="This is the third service"/>
          <ServiceThumbnail imgSrc="http://lorempixel.com/240/150/city/4" title="Stone" description="This is the fourth service"/>
          <ServiceThumbnail imgSrc="http://lorempixel.com/240/150/city/5" title="Walls & Windows" description="This is the fifth service"/>
          <ServiceThumbnail imgSrc="http://lorempixel.com/240/150/city/6" title="Foundation/Basement" description="This is the sixth service"/>
        </StyledGridContainer>
      </StyledServicesGrid>
    );
  }
}

export default ServicesGrid;