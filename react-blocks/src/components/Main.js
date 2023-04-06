import React from 'react';
import '../App.css';

function Main({ children }) {
    return (
        <div className="main">
            <h2>Main</h2>
            {children}
        </div>
    );
}

export default Main;