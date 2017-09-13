import React from 'react';
// import styled from 'styled-components';
import './App.css';
import TopCarousel from './TopCarousel';
import ServicesGrid from './ServicesGrid';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';
import Contact from './Contact';


const MainPage = () => {
  return (
    <div>
      <TopCarousel />
      <div id="Services"><ServicesGrid /></div>
      <div id="AboutUs"><AboutUs /></div>
      <div id="Testimonials"><Testimonials /></div>
      <div id="ServiceArea"><Contact /></div>
    </div>
  );
};

export default MainPage;
