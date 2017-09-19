import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';
import TopBar from './TopBar';
import Footer from './Footer';
import MainPage from './MainPage';
import ServicePageMain from './ServicePageMain';

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
    accent1Color: '#fff',
    alternateTextColor: '#0a0',
  },
  appBar: {
    height: '100%',
  },
  inkBar: {
    backgroundColor: '#f00',
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
        <div>
          <TopBar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/services/:type" component={ServicePageMain} />
            <Route component={MainPage} />
          </Switch>
          <Footer />
        </div>
      </MuiThemeProvider>
    </StyledApp>
  );
};

export default App;
