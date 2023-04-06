import React from 'react';
import '../App.css';

function Advertisement({ children }) {
    return (
        <div className="advertisement">
            <h2>Advertisement</h2>
            {children}
        </div>
    );
}

export default Advertisement;