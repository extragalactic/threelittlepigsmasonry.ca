import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const StyledTopBar = styled.section`
  display: flex;
  justify-content: 'left';
  background-color: #841F27;

  img { 
    float: left;
    height: 70px;
    @media (max-width: 1000px) {
      height: 55px;
    }
    @media (max-width: 600px) {
      height: 40px;
    }
  }
`;

class TopBar extends React.Component {
  static goToAnchor(anchor) {
    const loc = document.location.toString().split('#')[0];
    document.location = loc + '#' + anchor;
    return false;
  }

  render() {
    return (
      <StyledTopBar>
        <AppBar
          title={<div><a href=""><img src="./images/3lp-header-bar.png" alt="Three Little Pigs Masonry" /></a></div>}
          showMenuIconButton={false}
          iconElementRight={<MainMenu />}
        />
      </StyledTopBar>
    );
  }
}

const MainMenu = (props) => {
  return (
    <IconMenu
      {...props}
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <MenuItem primaryText="Services" onClick={() => { TopBar.goToAnchor('Services'); }} />
      <MenuItem primaryText="About Us" onClick={() => { TopBar.goToAnchor('AboutUs'); }} />
      <MenuItem primaryText="Testimonials" onClick={() => { TopBar.goToAnchor('Testimonials'); }} />
      <MenuItem primaryText="Contact" onClick={() => { TopBar.goToAnchor('Contact'); }} />
    </IconMenu>
  );
};

MainMenu.muiName = 'IconMenu';

export default TopBar;
