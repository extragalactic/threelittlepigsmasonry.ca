import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import MediaQuery from 'react-responsive';
import ServiceThumbnail from './ServiceThumbnail';
import ServiceData from './ServiceData';


const StyledServicesGrid = styled.section`
  padding-top: 5px;
`;
const StyledGridContainer = styled.section`
  margin-top: -15px;
`;


const allServicesTabs = ServiceData.map((service, i) => {
  return (
    <Tab label={service.pageName} value={i} key={service.pageName} />
  );
});

// split the tabs menu into 2 rows on small screens
const servicesTabsRow1 = ServiceData.map((service, i) => {
  let val = <Tab label={service.pageName} value={i} key={service.pageName} />;
  if (i > 2) {
    val = null;
  }
  return val;
});

const servicesTabsRow2 = ServiceData.map((service, i) => {
  let val = <Tab label={service.pageName} value={i} key={service.pageName} />;
  if (i < 3) {
    val = null;
  }
  return val;
});

const allServices = ServiceData.map((service) => {
  return (
    <div key={service.pageName}>
      <ServiceThumbnail service={service} />
    </div>
  );
});


class ServicesGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  }

  render() {
    return (
      <StyledServicesGrid>
        <h2>Our Services</h2>
        <StyledGridContainer>
          <MediaQuery minWidth={1} maxWidth={599}>
            <Tabs
              onChange={this.handleChange}
              value={this.state.slideIndex}
              style={{ marginTop: '30px' }}
            >
              {servicesTabsRow1}
            </Tabs>
            <Tabs
              onChange={this.handleChange}
              value={this.state.slideIndex}
              style={{ marginTop: '0px' }}
            >
              {servicesTabsRow2}
            </Tabs>
          </MediaQuery>
          <MediaQuery minWidth={600}>
            <Tabs
              onChange={this.handleChange}
              value={this.state.slideIndex}
              style={{ marginTop: '0px' }}
            >
              {allServicesTabs}
            </Tabs>
          </MediaQuery>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange}
          >
            {allServices}
          </SwipeableViews>
        </StyledGridContainer>
      </StyledServicesGrid>
    );
  }
}

export default ServicesGrid;
