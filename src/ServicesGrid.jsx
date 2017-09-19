import React from 'react';
import styled from 'styled-components';
import { Tabs, Tab } from 'material-ui/Tabs';
// import { Tabs, Tab } from 'material-ui-scrollable-tabs/Tabs';
import SwipeableViews from 'react-swipeable-views';
import MediaQuery from 'react-responsive';
import './App.css';
import ServiceThumbnail from './ServiceThumbnail';
import ServiceData from './ServiceData';

/*
const StyledServicesGrid = styled.section`
  padding-top: 0px;
`;
const StyledGridContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -20px;
`;
*/
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
const allServicesTabs1 = ServiceData.map((service, i) => {
  if (i <= 2) {
    return (
      <Tab label={service.pageName} value={i} key={service.pageName} />
    );
  }
});
const allServicesTabs2 = ServiceData.map((service, i) => {
  if (i >= 3) {
    return (
      <Tab label={service.pageName} value={i} key={service.pageName} />
    );
  }
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
              {allServicesTabs1}
            </Tabs>
            <Tabs
              onChange={this.handleChange}
              value={this.state.slideIndex}
              style={{ marginTop: '0px' }}
            >
              {allServicesTabs2}
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
