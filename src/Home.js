import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/stanzinger.svg'; // Adjust the path as needed
import bg from './assets/bg_landscape.svg'; // Adjust the path as needed

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <img src={bg} alt="Background" style={styles.bg} />
        <img src={logo} alt="Logo" style={styles.logo} />
      <h2>14.09.2024</h2>
      <button className="RSVP" onClick={() => navigate('/rsvp')}>RSVP</button>
      <div style={styles.topLeft}>AME x LEO</div>
      <div style={styles.topRight}>18:00 - 24:00</div>
      <div style={styles.bottomLeft}>NELLA BELJAN GALLERY</div>
      <div style={styles.bottomRight}>LEIPZIGER STR. 60/61</div>
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
      marginLeft: '-400px',
      left: '50%',
      width: '800px',
      top: '15%',
      opacity: '30%',
      zIndex: '-1'
    }
}

export default Home;