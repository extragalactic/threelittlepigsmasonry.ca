import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GetQuote from './GetQuote';
import TopBar from './TopBar';
import LaunchChatButton from './LaunchChatButton';
import LandingFacebook from './LandingFacebook';
import LandingTwitter from './LandingTwitter';


const StyledLandingPageBase = styled.section`
  position: relative;
  z-index: 0;
`;

class LandingPageBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
    this.pageType = props.match.params.page;
    this.openChat = this.openChat.bind(this);
    this.closeChat = this.closeChat.bind(this);
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
      <StyledLandingPageBase>
        <TopBar />
        {this.pageType === 'fb' &&
          <LandingFacebook />
        }
        {this.pageType === 'tw' &&
          <LandingTwitter />
        }
        {this.state.modalIsOpen &&
          <GetQuote closeModal={this.closeChat} />
        }
        <LaunchChatButton openChat={this.openChat} />
      </StyledLandingPageBase>
    );
  }
}

LandingPageBase.propTypes = {
  match: PropTypes.object.isRequired,
};

export default LandingPageBase;
