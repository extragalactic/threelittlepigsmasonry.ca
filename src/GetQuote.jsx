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

class GetQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }

  render() {
    return (
      <StyledGetQuote>
        <AriaModal
          titleText="Three Little Pigs Quote Tool"
          /* initialFocus="#user-input" */
          verticalyCenter
          onExit={this.props.closeModal}
          underlayStyle={{ paddingTop: '0em', top: '0px', left: '0px' }}
        >
          <div className="modal">
            <div>
              <Iframe
                styles={modalIframe}
                url="http://172.16.2.202:8000"
                width="350"
                height="400"
                frameborder="0"
              />
            </div>
            <div style={modalHeader}>
              <RaisedButton
                label="return"
                secondary
                onTouchTap={this.props.closeModal}
              />
            </div>
          </div>
        </AriaModal>
      </StyledGetQuote>
    );
  }
}

GetQuote.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default GetQuote;
