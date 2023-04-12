import React, { useState } from 'react';

function CoinFlip() {
    const [result, setResult] = useState('');
    const [log, setLog] = useState([]);

    function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }

    function fiveHeads() {
        return new Promise((resolve, reject) => {
            let headsCount = 0;
            let attempts = 0;
            let maxAttempts = 100;

            while (headsCount < 5 && attempts <= maxAttempts) {
                attempts++;
                let result = tossCoin();
                //setLog to show it on the HTML
                setLog(prevLog => [...prevLog, `${result} was flipped`]);
                if (result === "heads") {
                    headsCount++;
                } else {
                    headsCount = 0;
                }
            }
            if (attempts <= maxAttempts) {
                resolve(`It took ${attempts} tries to flip five "heads"`);
            } else {
                reject(`Attempts have exceeded ${maxAttempts} flips.`);
            }
        });
    }

    const handleClick = () => {
        setResult('');
        setLog([]);
        try {
            const res = fiveHeads();
            res.then(resolvedValue => setResult(resolvedValue))
                .catch(rejectedValue => setResult(rejectedValue));
        } catch (err) {
            setResult(err);
        }
    };

    return (
        <div>
            <button onClick={handleClick}>Start Flipping</button>
            <div style={{ color: 'blue' }}>{result}</div>
            <ul>
                {log.map((entry, index) => (
                    <li
                        key={index}
                        style={{
                            "listStyleType": "none",
                            color: entry.includes('heads') ? 'green' : 'red',

                        }}
                    >
                        {entry}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CoinFlip;
