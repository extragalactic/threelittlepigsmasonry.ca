import React from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import history from './history';

import './App.css';

const StyledServiceThumbnail = styled.section`
  padding-left: 5px;
  padding-right: 5px;
  width: 250px;

  p {
    font-size: 1.0em;
    text-align: left;
    text-justify: auto;    
  }
`;

const ServiceThumbnail = (props) => {
  return (
    <LazyLoad height={200}>
      <StyledServiceThumbnail>
        <h3>{props.service.title}</h3>
        <a href={props.service.link}><img src={props.service.imgSrc} alt="" /></a>
        <p>{props.service.summary}</p>
        <RaisedButton
          style={{ padding: '10px' }}
          labelStyle={{ fontSize: '0.8em' }}
          label="Learn more..."
          primary
          onClick={() => { history.push(`/services/${props.service.pageName}`); }}
        />
      </StyledServiceThumbnail>
    </LazyLoad>
  );
};

ServiceThumbnail.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceThumbnail;
