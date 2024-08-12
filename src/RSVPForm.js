import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bg from './assets/bg_portrait.svg'; // Adjust the path as needed

function RSVPForm() {
  const [guestCount, setGuestCount] = useState(1);
  const [guestNames, setGuestNames] = useState(['']);
  const [submitText, setSubmitText] = useState(['SUBMIT']);
  const navigate = useNavigate(); // Hook for navigation

  const handleIncrement = () => {
    setGuestCount(prevCount => {
      if (prevCount < 4) {
        const newCount = prevCount + 1;
        setGuestNames(Array(newCount).fill(''));
        return newCount;
      }
      return prevCount;
    });
  };

  const handleDecrement = () => {
    setGuestCount(prevCount => {
      if (prevCount > 1) {
        const newCount = prevCount - 1;
        setGuestNames(prevNames => prevNames.slice(0, newCount));
        return newCount;
      }
      return prevCount; // Do not decrement below 1
    });
  };

  const handleGuestNameChange = (index, value) => {
    const newGuestNames = [...guestNames];
    newGuestNames[index] = value;
    setGuestNames(newGuestNames);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitText("SUBMITTING...");

    const url = 'https://sheetdb.io/api/v1/cztz4ochk7edw'; // Replace with your actual SheetDB API URL
    const apiKey = 'mjz7yuypb8gu44juhqa1hzkg2ui9zvl761g8igg1'; // Replace with your actual API key from SheetDB

    // Prepare data to send
    const dataToSubmit = guestNames.map(name => ({
      id: "INCREMENT", // Use "INCREMENT" if you want the ID to auto-increment, or omit if ID is managed differently
      name: name
    }));

    try {
      const response = await fetch(url, {
        method: 'POST', // Use POST to add new records
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: dataToSubmit
        }),
      });

      if (response.ok) {
        // alert('RSVP Submitted!');
        navigate('/confirmation'); // Redirect to confirmation page
      } else {
        const error = await response.json();
        alert('There was an error submitting your RSVP.');
        console.error('Error:', error);
        submitText = "SUBMIT";
      }
    } catch (error) {
      alert('Error submitting RSVP. Please try again.');
      console.error('Fetch error:', error);
      submitText = "SUBMIT";
    }
  };

  return (
    <div style={styles.container}>
      <img src={bg} alt="Background" style={styles.bg} />
      <h2>HOW MANY ARE YOU?</h2>
      <div style={styles.guestSelector}>
        <button onClick={handleDecrement} style={styles.stepButton}>-</button>
        <span style={styles.count}>{guestCount}</span>
        <button onClick={handleIncrement} style={styles.stepButton}>+</button>
      </div>
      <h2>TELL US YOUR NAMES</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {guestNames.map((_, index) => (
          <div key={index} style={styles.inputGroup}>
            <label>
              <input
                type="text"
                placeholder={`Guest ` + (index + 1)}
                value={guestNames[index]}
                onChange={(e) => handleGuestNameChange(index, e.target.value)}
                required
                style={styles.input}
              />
            </label>
          </div>
        ))}
        <button className="RSVP" type="submit" style={styles.submitButton}>{submitText}</button>
      </form>
    </div>
  );
}

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '100vh', // Full viewport height
      paddingTop: '260px',
      zIndex: '99'
    },
    guestSelector: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '40px',
    },
    stepButton: {
      backgroundColor: 'transparent',
      color: 'white',
      borderRadius: '800px',
      border: 'none',
      fontSize: '40px',
      cursor: 'pointer',
      margin: '0 10px',
    },
    count: {
      fontSize: '24px',
      margin: '0 20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      maxWidth: '400px',
      width: '100%'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    input: {
      padding: '8px',
      fontSize: '16px',
      width: '100%',
      boxSizing: 'border-box',
      backgroundColor: 'transparent',
      color: '#fff',
      border: "1px solid #fff"
    },
    submitButton: {
        marginTop: '60px',
        width: 'auto'
    },
    bg: {
      position: 'absolute',
      marginLeft: '-200px',
      left: '50%',
      width: '400px',
      top: '80px',
      opacity: '30%',
      zIndex: '-1'
    }
  };

export default RSVPForm;
