import React from 'react';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import TestimonialCard from './TestimonialCard';
import TestimonialData from './TestimonialData';

const google = window.google;

const StyledTestimonials = styled.section`
  width: 100%;
  padding-top: 5px;
`;

class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberToShow: 6,
      testimonials: [],
    };
    this.oldTestimonials = TestimonialData;
    this.numberTotal = TestimonialData.length;
  }

  componentWillMount() {
    // get testimonials from Google reviews API
    const service = new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails({
      placeId: 'ChIJ74NmW2vTKogRAVn6jOwdYUI',
    }, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        const testimonials = [];
        place.reviews.forEach((review) => {
          testimonials.push({
            title: '',
            text: review.text,
            name: review.author_name,
            stars: review.rating,
            location: '',
          });
        });
        // append old (static) testimonials to the returned array
        this.oldTestimonials.forEach((review) => {
          testimonials.push(review);
        });
        this.numberTotal = testimonials.length;
        this.setState({
          testimonials,
        });
      }
    });
  }

  render() {
    const testimonialCollection = this.state.testimonials.map((review, i) => {
      let val = <TestimonialCard review={review} key={i} />;
      if (i >= this.state.numberToShow) {
        val = null;
      }
      return val;
    });

    return (
      <StyledTestimonials>
        <h2>Testimonials</h2>
        <ResponsiveMasonry columnsCountBreakPoints={{ 200: 1, 450: 2, 700: 3, 1000: 4 }}>
          <Masonry>
            {testimonialCollection}
          </Masonry>
        </ResponsiveMasonry>
        {this.state.numberToShow < this.numberTotal &&
          <div>
            <h3>. . .</h3>
            <FlatButton labelStyle={{ fontSize: '1.0em', padding: '5px 10px' }} label="Read more testimonials" primary onClick={() => { this.setState({ numberToShow: this.state.numberToShow + 5 }); }} />
          </div>
        }
      </StyledTestimonials>
    );
  }
}

export default Testimonials;
