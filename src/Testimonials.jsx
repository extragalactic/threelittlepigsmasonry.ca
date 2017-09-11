import React from 'react';
import styled from 'styled-components';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import TestimonialCard from './TestimonialCard';

const StyledTestimonials = styled.section`
  width: 100%;
`;

class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [
        { title: 'Front Home Restoration', text: 'Thank you for exceeding my expectations on the masonry restoration to the front entrance of my house. Your staff was cordial, on time, hardworking and meticulous. You stayed within the agreed price. I am delighted with the results! Should any prospective clients wish to view the work done, have them email me and I will be happy to forward my address so they can see for themselves.', name: 'Ewen', location: 'Thornhill, ON' },

        { title: 'An Enhanced Stone Exterior', text: "Dear Three Little Pigs Masonry, We are so delighted with the new look of our home. Your company's recent stone renovation work to our home's exterior and entrance was an enhancement which will add value and esthetic appeal to our house that we'll appreciate for many years to come. We must commend you and your invaluable employees on your workmanship, professional attitude, cleanliness and respect for our property and wishes. Everyone that worked here during the project can only be described as knowledgeable, friendly, always smiling and respectful of our privacy. We will always highly recommend your company for any masonry work. Thank you very much and all the best wishes for a successful business!", name: 'Ken and Viola', location: 'Aurora, ON' },
        
        { title: 'Expert Brick Repairs', text: 'I am very pleased with the brick repairs that Three Little Pigs completed to our chimneys last spring. In fact, they were even able to match the colour of those on the house. I was so pleased, in fact, that I recommended them to my brother-in-law–who is thrilled with his new chimneys and stone entrance ways that they completed at his house.', name: 'Warren', location: 'Aurora, ON' },
        
        { title: 'Renovations Received Compliments from Strangers', text: 'We highly recommend Three Little Pigs Masonry to anyone contemplating work involving masonry renovations. Their professionalism, dedication and diligence to detail are top notch and unsurpassed. As our stone installation project was being carried out, we literally had people off the street walk up to the work in progress and compliment the workmanship. TLP truly rates as one of the best contractors that we have come across and have had the pleasure of dealing with in a long time.', name: 'K and A', location: 'King City, ON' },
        
        { title: 'Fantastic Workmanship', text: "Workmanship was Excellent. The project was completed in a timely manner with minimal disruption to us. Our estimator's follow up to ensure complete satisfaction is key to us highly recommending them to anyone. Well done and thank you.", name: 'Anonymous', location: '' },
      ],
    };
  }

  render() {
    const childElements = this.state.elements.map((element, i) => {
      return (
        <TestimonialCard element={element} key={i} />
      );
    });

    return (
      <StyledTestimonials>
        <h2>Testimonials</h2>
        <ResponsiveMasonry columnsCountBreakPoints={{ 200: 1, 450: 2, 700: 3, 1000: 4 }}>
          <Masonry>
            {childElements}
          </Masonry>
        </ResponsiveMasonry>
      </StyledTestimonials>
    );
  }
}

export default Testimonials;
