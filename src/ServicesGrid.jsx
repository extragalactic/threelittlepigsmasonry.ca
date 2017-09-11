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

const ServicesGrid = () => {
  return (
    <StyledServicesGrid>
      <div><h2>Our Services</h2></div>
      <StyledGridContainer>
        <ServiceThumbnail imgSrc="http://lorempixel.com/240/150/city/1" title="Chimneys & Brick" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nulla libero, ultricies sed magna sit amet, placerat tincidunt sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." link="" />
        <ServiceThumbnail imgSrc="http://lorempixel.com/240/150/city/2" title="Concrete" description="Vivamus sed egestas libero. Duis dictum ultrices tristique. Aliquam volutpat molestie risus. Donec commodo nunc augue, ac elementum felis accumsan ut. Integer dapibus, libero quis placerat faucibus, turpis dolor molestie justo, vel sodales eros tortor a eros. Nam ut varius leo" link="" />
        <ServiceThumbnail imgSrc="http://lorempixel.com/240/150/city/3" title="Foundation" description="Vestibulum molestie, nulla sodales scelerisque condimentum, erat elit varius ligula, vitae euismod quam tellus a augue. In venenatis velit justo, nec vulputate massa maximus eget. Suspendisse eget diam vel ligula sollicitudin aliquam non volutpat augue." link="" />
        <ServiceThumbnail imgSrc="http://lorempixel.com/240/150/city/4" title="Stone" description="Proin augue mi, viverra nec laoreet ut, luctus ac sapien. Donec sit amet nulla sit amet nunc dapibus bibendum. Ut eu consequat purus. Etiam odio tortor, maximus at volutpat et, tempor nec nulla." link="" />
        <ServiceThumbnail imgSrc="http://lorempixel.com/240/150/city/5" title="Walls & Windows" description="Suspendisse commodo neque ut convallis egestas. Ut eu condimentum enim. Ut enim ligula, molestie sed dignissim vel, eleifend a purus. Vivamus molestie id felis eget mollis." link="" />
        <ServiceThumbnail imgSrc="http://lorempixel.com/240/150/city/6" title="Foundation/Basement" description="Curabitur at leo luctus leo commodo gravida. In suscipit felis imperdiet magna sagittis tristique. Integer enim purus, facilisis eu massa vel, vulputate fermentum mi. Sed scelerisque erat vehicula laoreet tincidunt. Nulla sollicitudin aliquet nibh eget finibus." link="" />
      </StyledGridContainer>
    </StyledServicesGrid>
  );
};

export default ServicesGrid;
