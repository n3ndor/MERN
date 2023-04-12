import React from 'react';
import CoinFlip from './components/CoinFlip';
import './App.css';


function App() {
    return (
        <div className="App">
            <h2>Coin Flipping</h2>
            <h3>How many flipps needed to get 5 heads in a row?</h3>
            <h3>Try it out:</h3>


            <CoinFlip />

        </div>
    );
}

export default App;
