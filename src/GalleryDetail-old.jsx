import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';

const styles = {
  dialogRoot: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingTop: 0,
  },
  dialogContent: {
    display: 'flex',
    position: 'relative',
    width: '98vw',
    maxWidth: '600px',
  },
  dialogBody: {
    padding: '5px',
    overflow: 'scroll',
  },
};

const StyledGalleryDetail = styled.div`
  cursor: pointer;

  img {
    width: 100%;
  }
`;

const GalleryDetail = (props) => {
  return (
    <div style={{ position: 'fixed', top: '0', bottom: '0' }} >
      <Dialog
        modal
        open
        contentStyle={styles.dialogContent}
        bodyStyle={styles.dialogBody}
        style={styles.dialogRoot}
      >
        <StyledGalleryDetail
          onClick={() => { props.closeModal(); }}
        >
          <img
            src={props.photo}
            alt=""
          />
        </StyledGalleryDetail>
      </Dialog>
    </div>
  );
};

//        contentStyle={{ width: '100%', maxWidth: 'none', top: '0px' }}


/*
const GalleryDetail = (props) => {
  return (
    <StyledGalleryDetail>
      <div onClick={() => { props.closeModal(); }}>
        <img
          src={props.photo}
          alt=""
        />
      </div>
    </StyledGalleryDetail>
  );
};
*/

GalleryDetail.propTypes = {
  photo: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default GalleryDetail;
