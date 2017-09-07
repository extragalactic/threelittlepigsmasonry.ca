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
`;
const StyledTopImage = styled.img`
  float: left;
  height: 70px;
  @media (max-width: 1000px) {
    height: 55px;
  }
  @media (max-width: 600px) {
    height: 40px;
  }
`;


const MainMenu = (props) => {
  var { goToAnchor, ...other } = props;
  return (
    <IconMenu
      {...other}
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Services" onClick={() => goToAnchor('Services')} />
      <MenuItem primaryText="About Us" onClick={() => goToAnchor('AboutUs')} />
      <MenuItem primaryText="Testimonials" onClick={() => goToAnchor('Testimonials')} />
      <MenuItem primaryText="Contact" onClick={() => goToAnchor('Contact')} />
    </IconMenu>
  );
};
//MainMenu.propTypes = {
//  goToAnchor: PropTypes.func.isRequired,
//};
MainMenu.muiName = 'IconMenu';


class TopBar extends React.Component {

  goToAnchor = (anchor) => {
    var loc = document.location.toString().split('#')[0];
    document.location = loc + '#' + anchor;
    return false;
  }

  render() {
    return(
      <StyledTopBar>
        <AppBar
          title={<div><StyledTopImage src="./images/3lp-header-bar.png" alt="Three Little Pigs Masonry"/></div>}
          showMenuIconButton={false}
          iconElementRight={<MainMenu goToAnchor={this.goToAnchor}/>}
        />
      </StyledTopBar>
    );
  }
}

export default TopBar;