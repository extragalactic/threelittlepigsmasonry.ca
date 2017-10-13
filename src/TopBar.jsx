import React from 'react';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import history from './history';

const StyledTopBar = styled.div`
  justify-content: left;
  margin-left: -20px;
  background-color: #841f27;
  background: linear-gradient(#841f27, #b9202c);

  img {
    float: left;
    padding: 3px;
    height: 120px;
    @media (max-width: 1000px) {
      height: 105px;
    }
    @media (max-width: 600px) {
      height: 85px;
    }
    @media (max-width: 450px) {
      height: 68px;
    }    
    @media (max-width: 370px) {
      height: 50px;
    }    
  }
`;


class TopBar extends React.Component {
  static goToAnchor(anchor) {
    document.location = `${document.location.protocol}//${document.location.host}/#${anchor}`;
    return false;
  }

  render() {
    return (
      <StyledTopBar>
        <AppBar
          title={
            <div>
              <a style={{ backgroundColor: '#841F27' }}>
                <img src="/images/3LPM-title-light.png" alt="Three Little Pigs Masonry" />
              </a>
            </div>
          }
          showMenuIconButton={false}
          iconElementRight={<MainMenu />}
          style={{
            position: 'static',
            top: 0,
            display: 'flex',
            alignItems: 'center',
          }}
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
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <MenuItem
        primaryText="Services"
        onClick={() => {
          TopBar.goToAnchor('Services');
        }}
      />
      <MenuItem
        primaryText="About Us"
        onClick={() => {
          TopBar.goToAnchor('AboutUs');
        }}
      />
      <MenuItem
        primaryText="Photo Gallery"
        onClick={() => {
          TopBar.goToAnchor('Photos');
        }}
      />
      <MenuItem
        primaryText="Testimonials"
        onClick={() => {
          TopBar.goToAnchor('Testimonials');
        }}
      />
      <MenuItem
        primaryText="Service Area"
        onClick={() => {
          TopBar.goToAnchor('ServiceArea');
        }}
      />
    </IconMenu>
  );
};

MainMenu.muiName = 'IconMenu';

export default TopBar;
