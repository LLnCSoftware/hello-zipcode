import React, { useState } from 'react';
import './App.css';
import helloData from './assets/nv';

console.log('helloData 1', helloData);

function concatenateHelloValues(zipCode) {
  // Filter rows by zip code and exclude 'NA'

  const filteredRows = helloData.filter(row => row.Zipcode === zipCode && row.Hello !== 'NA');
  // Extract the 'hello' values
  const helloValues = filteredRows.map(row => row.Hello);

  // Concatenate with '|'
  return helloValues.join('|');
}

function App() {
  const [zipcode, setZipcode] = useState('');
  //const [isButtonActive, setIsButtonActive] = useState(false);
  const [howToSayHello, setHowToSayHello] = useState("");


  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };

  const handleGetHelloClick = () => {
    console.log('Get Hello with Zipcode:', zipcode);

    if (zipcode === "") {
      setHowToSayHello("Please enter a valid zip code 11111.");
      return;
    }
    setHowToSayHello(concatenateHelloValues(JSON.parse(zipcode)));

    console.log('concatenateHelloValues', howToSayHello);

  };

  return (
    <div className="App">
      <header className="App-header">

        <div className="logo-container">
          <img src="F6_SofterSeal_MutedGreen.webp" alt="Logo" />
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
        <button className="main-button" onClick={handleGetHelloClick} >
          Get Hello
        </button>
        <div className="say-report" id="hello-values"><em>{howToSayHello || "No data for this zip code."}</em></div>
      </header>
    </div>
  );
}

export default App;

