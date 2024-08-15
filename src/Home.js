import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/stanzinger.svg'; // Adjust the path as needed
import bg from './assets/bg_landscape.svg'; // Adjust the path as needed


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
      <img src={bg} alt="Background" style={hover ? styles.bgHover : styles.bg} />
      <img src={logo} alt="Logo" style={styles.logo} />
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
    bgHover: {
      position: 'absolute',
      marginLeft: '0px',
      left: '0%',
      top: '0%',
      width: '100%',
      opacity: '10%',
      zIndex: '-1'
    },
    submitButton: {
        marginTop: '60px',
        width: 'auto'
    },
}

export default Home;