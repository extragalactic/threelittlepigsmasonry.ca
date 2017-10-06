import React from 'react';
import styled from 'styled-components';
import { Launcher } from 'react-chat-window';
import TopCarousel from './TopCarousel';
import ServicesThumbContainer from './ServicesThumbContainer';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';
import Contact from './Contact';
import TextDivider from './TextDivider';
import GetQuote from './GetQuote';
import PhotoGallery from './PhotoGallery';
import TopBar from './TopBar';

const StyledMainPage = styled.section`
  position: relative;
  z-index: 0;
`;

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      messageList: [],
      newMessagesCount: 0,
      isOpen: false,
    };
    this.openChat = this.openChat.bind(this);
    this.closeChat = this.closeChat.bind(this);
    this._onMessageWasSent = this._onMessageWasSent.bind(this);
    this._sendMessage = this._sendMessage.bind(this);
    this.handleClick = this._handleClick.bind(this);
  }

  openChat() {
    console.log(this.state)
    this.setState({
      isOpen: true,
    });
  }

  closeChat() {
    this.setState({
      modalIsOpen: false,
    });
  }
  _onMessageWasSent(message) {
    console.log(message)
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }

  _sendMessage(text) {
    console.log('SENT', text)
    if (text.length > 0) {
      const newMessagesCount = this.state.isOpen ? this.state.newMessagesCount : this.state.newMessagesCount + 1
      this.setState({
        newMessagesCount: newMessagesCount,
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }

  _handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
      newMessagesCount: 0,
    });
  }
  render() {
    return (
      <StyledMainPage>
        <TopBar />
        {this.state.modalIsOpen &&
          <GetQuote closeModal={this.closeChat} />
        }
        <TopCarousel openChat={this.openChat} />
        <TextDivider quoteID={0} />
        <div id="Services"><ServicesThumbContainer /></div>
        <div id="AboutUs"><AboutUs /></div>
        <TextDivider quoteID={1} />
        <div id="Photos"><PhotoGallery /></div>
        <div id="Testimonials"><Testimonials /></div>
        <div id="ServiceArea"><Contact openChat={this.openChat} /></div>

        <Launcher
          style={{
            position: 'absolute',
          }}
          agentProfile={{
            teamName: 'Get an estiamte!',
            imageUrl: 'https://s3.ca-central-1.amazonaws.com/tlpm/pictures/imageedit_1_3880336731.png'
          }}
          onMessageWasSent={this._onMessageWasSent}
          messageList={this.state.messageList}
          newMessagesCount={this.state.newMessagesCount}
          handleClick={this._handleClick}
          isOpen={this.state.isOpen}
        />
      </StyledMainPage>
    );
  }
}

export default MainPage;


/*
import LaunchChatButton from './LaunchChatButton';
 <LaunchChatButton openChat={this.openChat} />
*/
