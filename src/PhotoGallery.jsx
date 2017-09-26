import React from 'react';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import MediaQuery from 'react-responsive';


const StyledGallery = styled.section`
  width: 100%;
  padding-top: 5px;
`;
const StyledImg = styled.img`
  width: 100%;
`;

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: ['/images/gallery/gallery-sample-1.jpg',
        '/images/gallery/gallery-sample-2.jpg',
        '/images/gallery/gallery-sample-3.jpg',
        '/images/gallery/gallery-sample-4.jpg',
        '/images/gallery/gallery-sample-5.jpg',
        '/images/gallery/gallery-sample-6.jpg',
        '/images/gallery/gallery-sample-7.jpg',
        '/images/gallery/gallery-sample-8.jpg'],
      numberToShow: 3,
    };
    this.numberTotal = this.state.photos.length;
  }

  testimonialCollection(baseNum) {
    // the default # of items is dependent on the MediaQuery size
    return (
      this.state.photos.map((photo, i) => {
        let val = (
          <StyledImg
            key={i}
            src={photo}
            alt=""
          />
        );
        if (i >= this.state.numberToShow + baseNum) {
          val = null;
        }
        return val;
      })
    );
  }

  render() {
    return (
      <StyledGallery>
        <h2>Photo Gallery</h2>
        <ResponsiveMasonry columnsCountBreakPoints={{ 200: 1, 450: 2, 700: 3, 1000: 4 }}>
          <MediaQuery minWidth={1} maxWidth={449}>
            <Masonry gutter={'5px'}>
              {this.testimonialCollection(0)}
            </Masonry>
          </MediaQuery>
          <MediaQuery minWidth={450} maxWidth={699}>
            <Masonry gutter={'5px'}>
              {this.testimonialCollection(2)}
            </Masonry>
          </MediaQuery>
          <MediaQuery minWidth={700} maxWidth={999}>
            <Masonry gutter={'5px'}>
              {this.testimonialCollection(4)}
            </Masonry>
          </MediaQuery>
          <MediaQuery minWidth={1000}>
            <Masonry gutter={'5px'}>
              {this.testimonialCollection(8)}
            </Masonry>
          </MediaQuery>
        </ResponsiveMasonry>
        {this.state.numberToShow < this.numberTotal &&
          <div>
            <h3>. . .</h3>
            <FlatButton labelStyle={{ fontSize: '1.0em', padding: '5px 10px' }} label="See more photos" primary onClick={() => { this.setState({ numberToShow: this.state.numberToShow + 5 }); }} />
          </div>
        }
      </StyledGallery>
    );
  }
}

export default PhotoGallery;
