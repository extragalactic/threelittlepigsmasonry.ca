import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import Iframe from 'react-iframe';
import AriaModal from 'react-aria-modal';

// Note: npm uninstall these if not using...
// import Dialog from 'material-ui/Dialog';
// import FullscreenDialog from 'material-ui-fullscreen-dialog';
// import Modal from 'react-modal';


const StyledGetQuote = styled.div`
  position: 'absolute';
  zIndex: 9999;
`;

const modalIframe = {
  position: 'absolute',
  top: '1%',
  left: '1%',
  bottom: '2%',
  width: '98%',
  height: '95%',
};

const modalHeader = {
  position: 'absolute',
  top: '2%',
  right: '4%',
};

// Note: this needs to be switched to the production URL
const CHAT_URL = 'http://52.15.129.218';

const GetQuote = (props) => {
  return (
    <StyledGetQuote>
      <AriaModal
        titleText="Three Little Pigs Quote Tool"
        /* initialFocus="#user-input" */
        verticalyCenter
        onExit={props.closeModal}
        underlayStyle={{ paddingTop: '0em', top: '0px', left: '0px' }}
      >
        <div className="modal">
          <div>
            <Iframe
              styles={modalIframe}
              url={CHAT_URL}
              width="350"
              height="400"
              frameborder="0"
            />
          </div>
          <div style={modalHeader}>
            <RaisedButton
              label="return"
              secondary
              onTouchTap={props.closeModal}
            />
          </div>
        </div>
      </AriaModal>
    </StyledGetQuote>
  );
};

GetQuote.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default GetQuote;
