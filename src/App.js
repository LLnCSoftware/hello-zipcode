import React, { useState, useEffect } from 'react';
import './App.css';
import { parseCSV, concatenateHelloValues } from './model';

function App() {
  const [zipcode, setZipcode] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [howToSayHello, setHowToSayHello] = useState("");

  // Code to execute before button is live
  useEffect(() => {
    // Example: Fetch some data or perform a check
    // Simulating a fetch with a timeout
    setTimeout(() => {
      console.log('Pre-execution code start.');
      parseCSV('nv.json')
        .then(data => { console.log(data) });

      console.log('Pre-execution code complete.');
      setIsButtonActive(true); // Enable the button after the code completes
    }, 2000); // Adjust time as needed for your pre-execution code
  }, []); // Empty dependency array means this runs once on mount

  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };

  const handleGetHelloClick = () => {
    console.log('Get Hello with Zipcode:', zipcode);
    // Implement what happens when "Get Hello" is clicked

    setHowToSayHello(concatenateHelloValues(JSON.parse(zipcode)));
    
    console.log('concatenateHelloValues', howToSayHello);

  };

  return (
    <div className="App">
      <header className="App-header">

      <div className="logo-container">
        <img src="F6_SofterSeal_MutedGreen.webp" alt="Logo"  />
      </div>

        <input className="main-input" 
          type="text"
          placeholder="Enter Zipcode"
          value={zipcode}
          pattern="\d{5}"
          onChange={handleZipcodeChange}
          title="Enter a 5-digit US ZIP code"
          maxLength="5"
        />
        <button className="main-button" onClick={handleGetHelloClick} disabled={!isButtonActive}>
          Get Hello
        </button>
        <div className="say-report" id="hello-values"><em>{howToSayHello || "No data for this zip code."}</em></div>
      </header>
    </div>
  );
}

export default App;


