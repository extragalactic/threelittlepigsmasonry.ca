import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import RaisedButton from 'material-ui/RaisedButton';
import ServiceData from './ServiceData';
import ServicePage from './ServicePage';
import GetQuote from './GetQuote';
import ServicesTabsNav from './ServicesTabsNav';


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
  constructor(props) {
    super(props);

    this.serviceType = props.match.params.type;
    this.state = {
      modalIsOpen: false,
      // find selected tab index based on page name
      selectedTab: ServiceData.indexOf(ServiceData.find((obj) => {
        return obj.pageName === this.serviceType;
      })),
    };
    this.openChat = this.openChat.bind(this);
    this.closeChat = this.closeChat.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.allServices = this.allServices.bind(this);
  }

  allServices() {
    return (
      ServiceData.map((service) => {
        return (
          <div key={service.pageName}>
            <ServicePage serviceType={service.pageName} openChat={this.openChat} />
          </div>
        );
      })
    );
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

  handleChange(value) {
    this.setState({
      selectedTab: value,
    });
  }

  render() {
    return (
      <StyledServicePage>
        <ServicesTabsNav pageContent={this.allServices()} startIndex={this.state.selectedTab} />

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
