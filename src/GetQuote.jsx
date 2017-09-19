import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
// import Dialog from 'material-ui/Dialog';
import Iframe from 'react-iframe';
import Dimensions from 'react-dimensions';
// import FullscreenDialog from 'material-ui-fullscreen-dialog';
// import Modal from 'react-modal';
import AriaModal from 'react-aria-modal';

/*
const modalHeader = styled.div`
  z-index: 100;
  margin-top: 200px;
`;
*/

class GetQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }

  render() {
    return (
      <div>
        <AriaModal
          titleText="Three Little Pigs Quote Tool"
          /* initialFocus="#user-input" */
          verticalyCenter
          underlayStyle={{ paddingTop: '0em', top: '0px', left: '0px' }}
        >
          <div className="modal">
            <div className="modal-body">
              <Iframe
                url="http://localhost:8000"
                width="95%"
                height="85%"
                display="initial"
                position="absolute"
                styles={{ top: '60px', left: '2.5%' }}
              />
            </div>
            <div className="modalHeader">
              <RaisedButton
                label="Close"
                primary
                onTouchTap={this.props.closeModal}
              />
            </div>
          </div>
        </AriaModal>
      </div>
    );
  }
}
GetQuote.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Dimensions()(GetQuote);
