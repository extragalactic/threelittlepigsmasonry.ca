import React from 'react';
import './App.css';
import TopCarousel from './TopCarousel';
import ServicesGrid from './ServicesGrid';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';
import Contact from './Contact';
import TextDivider from './TextDivider';

const MainPage = () => {
  return (
    <div>
      <TopCarousel />
      <TextDivider quoteID={0} />
      <div id="Services"><ServicesGrid /></div>
      <div id="AboutUs"><AboutUs /></div>
      <TextDivider quoteID={1} />
      <div id="Testimonials"><Testimonials /></div>
      <div id="ServiceArea"><Contact /></div>
    </div>
  );
};

export default MainPage;
