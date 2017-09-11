import React from 'react';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import TopBar from './TopBar';
import TopCarousel from './TopCarousel';
import ServicesGrid from './ServicesGrid';
import Footer from './Footer';
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';
import Contact from './Contact';

const StyledApp = styled.section`
  text-align: center;
  position: relative;
  margin: auto;
  width: 95%;
  flex: 1;
`;

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#841F27',
    accent1Color: '#0a0',
  },
  appBar: {
    height: '100%',
  },
});

injectTapEventPlugin();

const App = () => {
  return (
    <StyledApp>
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <div>
          <TopBar />
          <TopCarousel />
          <div id="Services"><ServicesGrid /></div>
          <div id="AboutUs"><AboutUs /></div>
          <div id="Testimonials"><Testimonials /></div>
          <div id="Contact"><Contact /></div>
          <Footer />
        </div>
      </MuiThemeProvider>
    </StyledApp>
  );
};

export default App;
