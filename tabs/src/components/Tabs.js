import React, { useState } from 'react';

const Tabs = ({ pages }) => {
    const [active, setActive] = useState(0);

    return (
        <div>
            {pages.map((item, index) => (
                <button key={index} onClick={() => setActive(index)}>{item.label}</button>
            ))}
            <h3>{pages[active].label}</h3>
            <h4>{pages[active].content}</h4>
        </div>
    )
}

export default Tabs