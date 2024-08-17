import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import stan from './assets/stan.svg'; // Adjust the path as needed
import zinger from './assets/zinger.svg'; // Adjust the path as needed


function Home() {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  }
  const handleMouseLeave = () => {
    setHover(false);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div style={styles.logoContainer}>
        <div style={styles.logoStan}>
          <img src={stan} alt="Stan logo" style={styles.stan} />
        </div>
        <div style={styles.logoZinger}>
          <img src={zinger} alt="Zinger logo" style={styles.zinger} />
        </div>
      </div>
      <h2>14.09.2024</h2>
      <button
        className="RSVP"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => navigate('/rsvp')}>
        RSVP
      </button>
      <div style={styles.topLeft}>AME x LEO</div>
      <div style={styles.topRight}>18:00 - 24:00</div>
      <div style={styles.bottomLeft}>LEIPZIGER STR. 60/61</div>
      <div style={styles.bottomRight}>DRESS CODE: BLACK</div>
    </div>
  );
}

const styles = {
    logo: {
      width: '800px', // Adjust the size as needed,
      maxWidth: '90%',
      height: 'auto',
      marginBottom: '20px', // Space between logo and title
    },
    logoContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      maxWidth: '1280px'
    },
    logoStan: {
      paddingLeft: '10%',
      textAlign: 'left'
    },
    logoZinger: {
      paddingRight: '10%',
      textAlign: 'right'
    },
    stan: {
      width: 'auto', // Adjust the size as needed,
      height: '80px',
      maxHeight: '6vw',
    },
    zinger: {
      width: 'auto', // Adjust the size as needed,
      height: '80px',
      maxHeight: '6vw',
    },
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
      opacity: '20%'
    },
    bgHover: {
      opacity: '10%'
    },
    submitButton: {
        marginTop: '60px',
        width: 'auto'
    },
}

export default Home;