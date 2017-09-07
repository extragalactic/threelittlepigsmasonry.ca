import React from 'react';
import styled from 'styled-components';
import './App.css';
import LazyLoad from 'react-lazyload'; // not sure if working
import PropTypes from 'prop-types';

const StyledServiceThumbnail = styled.section`
  padding: 5px;
`;

class ServiceThumbnail extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  render() {
    return(
      <LazyLoad height={50} offset={-100}>
        <StyledServiceThumbnail>
          <h3>{this.props.title}</h3>
          <img src={this.props.imgSrc} alt=""/>
          <p>{this.props.description}</p>
        </StyledServiceThumbnail>
      </LazyLoad>
    );
  }
}

export default ServiceThumbnail;