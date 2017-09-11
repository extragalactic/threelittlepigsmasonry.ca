import React from 'react';
import styled from 'styled-components';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

const StyledGetQuote = styled.section`
`;

class GetQuote extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const actions = [
      <RaisedButton
        label="Cancel"
        primary
        onTouchTap={this.closeModal}
      />,
    ];
    return (
      <StyledGetQuote>
        <RaisedButton label="Get Quote" secondary onClick={this.openModal} />
        <Dialog
          title="Get a Quote"
          actions={actions}
          modal
          open={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        >
          <p>Insert fancy AI chatbot here.</p>
        </Dialog>

      </StyledGetQuote>
    );
  }
}

export default GetQuote;
