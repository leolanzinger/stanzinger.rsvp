import React from 'react';
import bg from './assets/bg_landscape.svg'; // Adjust the path as needed

function ConfirmationPage() {
  return (
    <div style={{ textAlign: 'center'}}>
      <h1>Thank you</h1>
      <h1>x</h1>
      <h1>see you there!</h1>
      <img src={bg} alt="Background" className="background" />
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
    marginLeft: '0px',
    left: '0%',
    top: '0%',
    width: '100%',
    opacity: '20%',
    zIndex: '-1'
  },
  submitButton: {
      marginTop: '60px',
      width: 'auto'
  },
}

export default ConfirmationPage;
