import React from 'react';

function ConfirmationPage() {
  return (
    <div style={{ textAlign: 'center'}}>
      <h1>Thank you</h1>
      <h1>x</h1>
      <h1>see you there!</h1>

      <div style={styles.topLeft}>AME x LEO</div>
      <div style={styles.topRight}>18:00 - 24:00</div>
      <div style={styles.bottomLeft}>LEIPZIGER STR. 60/61</div>
      <div style={styles.bottomRight}>DRESS CODE: BLACK</div>
    </div>
  );
}

const styles = {
  topLeft: {
    position: 'absolute',
    left: '16px',
    top: '16px'
  },
  topRight: {
    position: 'absolute',
    right: '16px',
    top: '16px'
  },
  bottomLeft: {
    position: 'absolute',
    left: '16px',
    bottom: '16px'
  },
  bottomRight: {
    position: 'absolute',
    right: '16px',
    bottom: '16px'
  },
  bg: {
    position: 'absolute',
    marginLeft: '-400px',
    left: '50%',
    width: '800px',
    top: '15%',
    opacity: '30%',
    zIndex: '-1'
  },
  submitButton: {
      marginTop: '60px',
      width: 'auto'
  },
}

export default ConfirmationPage;
