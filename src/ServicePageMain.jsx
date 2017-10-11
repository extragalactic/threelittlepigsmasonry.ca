import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ServiceData from './ServiceData';
import ServicePage from './ServicePage';
import ServicesTabsNav from './ServicesTabsNav';
import { Launcher } from './chat/index';
import returnLexResponse from './util/LexBot';
import ScrollToTopOnMount from './util/ScrollToTopOnMount';


const StyledServicePage = styled.section`
  padding: 5px;
  padding-bottom: 30px;
  margin-top: 0px;
  position: relative;
  z-index: 0;

  h1 {
    text-align: left;
  }
  p {
    font-size: 1em;
    text-align: left;
  }
`;
const StyledNavContainer = styled.div`margin-top: -30px;`;

class ServicePageMain extends React.Component {
  constructor(props) {
    super(props);

    this.serviceType = props.match.params.type;
    this.state = {
      modalIsOpen: false,
      // find selected tab index based on page name
      selectedTab: ServiceData.indexOf(
        ServiceData.find((obj) => {
          return obj.pageName === this.serviceType;
        }),
      ),
      messageList: [
        {
          author: 'them',
          data: {
            text: 'Welcome to Three Little Pigs Masonry, Is there something I can do to help you?',
          },
          type: 'text',
        },
      ],
      newMessagesCount: 0,
      isOpen: false,
    };
    this.openChat = this.openChat.bind(this);
    this.closeChat = this.closeChat.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.allServices = this.allServices.bind(this);
    this._onMessageWasSent = this._onMessageWasSent.bind(this);
    this._sendMessage = this._sendMessage.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }
  openChat() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  closeChat() {
    this.setState({
      modalIsOpen: false,
    });
  }
  _onMessageWasSent(message) {
    returnLexResponse(message.data.text).then((res) => {
      const response = {
        author: 'them',
        data: {
          text: res,
        },
        type: 'text',
      };

      this.setState({
        messageList: [...this.state.messageList, message],
      });
      setTimeout(() => {
        this.setState({
          messageList: [...this.state.messageList, response],
        });
      }, 2000);
    });
  }

  _sendMessage(text) {
    if (text.length > 0) {
      const newMessagesCount = this.state.isOpen ? this.state.newMessagesCount : this.state.newMessagesCount + 1;
      this.setState({
        newMessagesCount,
        messageList: [
          ...this.state.messageList,
          {
            author: 'them',
            type: 'text',
            data: { text },
          },
        ],
      });
    }
  }

  _handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
      newMessagesCount: 0,
    });
  }

  allServices() {
    return ServiceData.map((service) => {
      return (
        <div key={service.pageName}>
          <ServicePage serviceType={service.pageName} openChat={this.openChat} />
        </div>
      );
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
        <ScrollToTopOnMount />
        <StyledNavContainer>
          <ServicesTabsNav pageContent={this.allServices()} startIndex={this.state.selectedTab} />
        </StyledNavContainer>
        <Launcher
          style={{
            position: 'absolute',
          }}
          agentProfile={{
            teamName: 'Third Pig',
            imageUrl: 'https://s3.ca-central-1.amazonaws.com/tlpm/pictures/imageedit_1_3880336731.png',
          }}
          onMessageWasSent={this._onMessageWasSent}
          messageList={this.state.messageList}
          newMessagesCount={this.state.newMessagesCount}
          handleClick={this._handleClick}
          isOpen={this.state.isOpen}
        />
      </StyledServicePage>
    );
  }
}

ServicePageMain.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ServicePageMain;
