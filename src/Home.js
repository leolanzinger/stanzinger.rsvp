import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/stanzinger.svg'; // Adjust the path as needed

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <img src={logo} alt="Logo" style={styles.logo} />
      <h2>14.09.2024</h2>
      <button className="RSVP" onClick={() => navigate('/rsvp')}>RSVP</button>
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
}

export default Home;