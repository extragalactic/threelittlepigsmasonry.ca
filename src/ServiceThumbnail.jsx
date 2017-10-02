import React from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
// import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import history from './history';

const StyledServiceThumbnail = styled.section`
  padding-left: 5px;
  padding-right: 5px;
  width: 95wh;
  text-align: center;

  p {
    font-size: 1.0em;
    text-align: center;
    text-justify: auto;
    max-width: 500px; 
    display: inline-block;
  }
  img {
    min-height: 200px;
    width: 100%;
    max-width: 500px;
    box-shadow: 3px 3px #777;
  }
`;

const ServiceThumbnail = (props) => {
  return (
    <StyledServiceThumbnail>
      <h3>{props.service.title}</h3>
      <img src={props.service.imgSrc} alt="" />
      <div>
        <p>{props.service.summary}</p>
        <div>
          <RaisedButton
            style={{ padding: '10px' }}
            labelStyle={{ fontSize: '0.8em' }}
            label="Learn more..."
            secondary
            onClick={() => { history.push(`/services/${props.service.pageName}`); }}
          />
        </div>
      </div>
    </StyledServiceThumbnail>
  );
};

ServiceThumbnail.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceThumbnail;
