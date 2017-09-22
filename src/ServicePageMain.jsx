import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
// import { Tabs, Tab } from 'material-ui/Tabs';
import { Tabs, Tab } from 'material-ui-scrollable-tabs/Tabs';
import ServiceData from './ServiceData';
import ServicePage from './ServicePage';
import GetQuote from './GetQuote';


const StyledServicePage = styled.section`
  padding: 5px;
  padding-bottom: 30px;
  margin-top: -30px;

  h1 {
    text-align: left;
  }
  p {
    font-size: 1.0em;
    text-align: left;  
  }
`;

class ServicePageMain extends React.Component {
  static getAllServicesPages() {
    const pages = ServiceData.map((service) => {
      return (
        <Tab label={service.title} key={service.pageName}>
          <ServicePage serviceType={service.pageName} />
        </Tab>
      );
    });
    return pages;
  }

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
    this.openChat = this.openChat.bind(this);
    this.closeChat = this.closeChat.bind(this);

    this.serviceType = props.match.params.type;
    // this.serviceData = ServiceData.find((service) => { return service.pageName === this.serviceType; });
  }

  openChat() {
    this.setState({
      modalIsOpen: true,
    });
  }

  closeChat() {
    this.setState({
      modalIsOpen: false,
    });
  }


  render() {
    return (
      <StyledServicePage>
        <Tabs
          tabType="scrollable-buttons"
          style={{ marginTop: '25px', marginBottom: '-30px' }}
        >
          {ServicePageMain.getAllServicesPages()}
        </Tabs>

        <RaisedButton label="Get Quote" secondary onClick={this.openChat} />
        {this.state.modalIsOpen &&
          <GetQuote closeModal={this.closeChat} />
        }
      </StyledServicePage>
    );
  }
}

ServicePageMain.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ServicePageMain;
