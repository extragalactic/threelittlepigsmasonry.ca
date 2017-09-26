import React from 'react';
import styled from 'styled-components';
import ServiceThumbnail from './ServiceThumbnail';
import ServiceData from './ServiceData';
import ServicesTabsNav from './ServicesTabsNav';


const StyledServicesGrid = styled.section`
  padding-top: 5px;
`;
const StyledGridContainer = styled.section`
  margin-top: -25px;
`;

const allServices = ServiceData.map((service) => {
  return (
    <div key={service.pageName}>
      <ServiceThumbnail service={service} />
    </div>
  );
});


class ServicesThumbContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
    };
  }

  render() {
    return (
      <StyledServicesGrid>
        <h2>Our Services</h2>
        <StyledGridContainer>
          <ServicesTabsNav pageContent={allServices} />
        </StyledGridContainer>
      </StyledServicesGrid>
    );
  }
}

export default ServicesThumbContainer;
