import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Footer from './Footer';
import TopBar from './TopBar';
import MainPage from './MainPage';
import ServicePageMain from './ServicePageMain';
// import './App.css';

const StyledApp = styled.section`
  text-align: center;
  position: relative;
  margin: auto;
  width: 100%;
  flex: 1;
`;

const GlobalStyles = styled.div`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
  a:link, a:visited {
    color: #fff;
    background-color: none;
    text-decoration: none;
    padding: 3px;
  }
  a:hover, a:active {
    color: #c65757;
    text-decoration: none;
    padding: 3px;     
  }  
  h1 {
    font-size: 1.8em;
    color: #999;
    background-color: #eee;
  }
  h2 {
    color: #fff;
    background-color: #841F27;
    background: linear-gradient(#841F27, #b9202c);
    font-size: 1.5em;
    padding: 5px 0px;
  }
  h3 {
    font-size: 1.2em;
  }
  h4 {
    font-size: 1.3em;
  }
  h5 {
    font-size: 1.3em;
    color: #841F27; 
  }
  h6 {
    font-size: 1.1em; 
  }  
`;

//     color: #841F27;

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#841F27',
    accent1Color: '#fff',
    alternateTextColor: '#1a0000',
  },
  appBar: {
    height: '100%',
  },
  inkBar: {
    backgroundColor: '#b9202c',
  },
  tabs: {
    backgroundColor: '#fff',
    textColor: '#000',
    fontSize: '1.0em',
  },
});
const myMuiTheme = getMuiTheme(muiTheme);

injectTapEventPlugin();

const App = () => {
  return (
    <StyledApp>
      <MuiThemeProvider muiTheme={myMuiTheme}>
        <GlobalStyles>
          <TopBar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/services/:type" component={ServicePageMain} />
            <Route component={MainPage} />
          </Switch>
          <Footer />
        </GlobalStyles>
      </MuiThemeProvider>
    </StyledApp>
  );
};


export default App;
