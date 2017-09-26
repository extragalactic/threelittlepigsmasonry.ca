import React from 'react';
import TopCarousel from './TopCarousel';
import ServicesThumbContainer from './ServicesThumbContainer';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';
import Contact from './Contact';
import TextDivider from './TextDivider';
import GetQuote from './GetQuote';
import PhotoGallery from './PhotoGallery';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
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
      <div>
        <TopCarousel openChat={this.openChat} />
        <TextDivider quoteID={0} />
        <div id="Services"><ServicesThumbContainer /></div>
        <div id="AboutUs"><AboutUs /></div>
        <TextDivider quoteID={1} />
        <div id="Photos"><PhotoGallery /></div>
        <div id="Testimonials"><Testimonials /></div>
        <div id="ServiceArea"><Contact openChat={this.openChat} /></div>
        {this.state.modalIsOpen &&
          <GetQuote closeModal={this.closeChat} />
        }
      </div>
    );
  }
}

export default MainPage;
