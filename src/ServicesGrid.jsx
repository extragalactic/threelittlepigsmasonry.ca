import React from 'react';
import styled from 'styled-components';
import './App.css';
import ServiceThumbnail from './ServiceThumbnail';

const StyledServicesGrid = styled.section`
  padding-top: 20px;
`;
const StyledGridContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -20px;
`;

const services = [
  { pageName: 'Brick', imgSrc: 'http://lorempixel.com/240/150/city/1', title: 'Chimneys & Brick', description: 'The condition of your chimney is very important for many reasons. Even an unused chimney must be maintained to avoid water penetration that can cause exterior as well as interior damage. The chimney requires several key components to be present in order for it to resist the harsh elements. Remember, the chimney stands above the structure and is exposed to the elements.', link: '' },

  { pageName: 'Concrete', imgSrc: 'http://lorempixel.com/240/150/city/2', title: 'Concrete', description: 'Concrete cracks are a common problem throughout the GTA. The majority of these cracks are caused by the failure to ensure proper reinforcement at time of installation. Concrete is useless without reinforcement. It is important to repair these cracks as when left unattended the cracks will widen with time and the freeze / thaw cycles will leave the concrete porous to the environment, especially water.', link: '' },

  { pageName: 'Foundation', imgSrc: 'http://lorempixel.com/240/150/city/3', title: 'Foundation', description: 'When Three Little Pigs Masonry is hired to install flagstone, the existing foundation must be sound or the life of the final product will be short. What is a sound foundation? The foundation must have been installed with all the necessary and essential components for it to withstand the earth’s shifting and our climate (frost).', link: '' },

  { pageName: 'Stone', imgSrc: 'http://lorempixel.com/240/150/city/4', title: 'Stone', description: 'Stone refacing has become a popular way to enhance the exterior beauty of your home using stone products. Real stone refacing allows us to change the look of your home through custom stone renovations eliminating the need to move away from your existing neighbourhood while achieving an updated look for your home or business.', link: '' },

  { pageName: 'Walls', imgSrc: 'http://lorempixel.com/240/150/city/5', title: 'Walls & Windows', description: 'Properly installed window sills are essential for the complete building envelope. Brick window sills tend to breakdown for a number of reasons. They are installed with an insufficient slope downwards and water sits on the brick instead of flowing away from the window. There are so many mortar joints and therefore too many possible entries for water to penetrate.', link: '' },

  { pageName: 'Basement', imgSrc: 'http://lorempixel.com/240/150/city/6', title: 'Basement', description: 'With basement waterproofing, usually we have to excavate the problem area or areas right down to the footing. We then check the weeping tile to make sure that after we leave the area that it is in good shape. If it too is defective, we must repair it.', link: '' },

];

const allServices = services.map((service, i) => {
  return (
    <ServiceThumbnail service={service} key={i} />
  );
});

const ServicesGrid = () => {
  return (
    <StyledServicesGrid>
      <h2>Our Services</h2>
      <StyledGridContainer>
        {allServices}
      </StyledGridContainer>
    </StyledServicesGrid>
  );
};

export default ServicesGrid;
