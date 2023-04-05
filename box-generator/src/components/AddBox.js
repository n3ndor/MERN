import React, { useState } from "react";

const AddBox = () => {
    const [color, setColor] = useState("");
    const [boxes, setBoxes] = useState([]);
    const [size, setSize] = useState(100);

    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxes([...boxes, { color, size }]);
        setColor(""); // ninja bonus: clear out the color input on successful submission.
        setSize(100);
    };
    return (
        <div>
            <form style={{ display: "flex", justifyContent: "center", gap: "50px" }} onSubmit={handleSubmit}>
                <div >
                    <label htmlFor="color"><h3>Set the Box Color:</h3></label>
                    <input
                        type="text"
                        id="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </div>
                <div>
                    <label><h3>Set the Box Size:</h3></label>
                    <input type="number" value={size} onChange={(e) => setSize(e.target.value)} />
                </div>

                <button type="submit" style={{ display: "block", background: "green", boxShadow: "10px 10px 10px" }}>Add Box</button>
            </form>

            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '100%',
                    justifyContent: "center",
                    alignItems: 'center',
                }}
            >
                {boxes.map((box, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                backgroundColor: box.color,
                                width: `${box.size}px`,
                                height: `${box.size}px`,
                                margin: '10px',
                            }} // ninja bonus: Add a second input that takes in an integer. 
                        //This integer will allow the user to specify the height and width of the generated box.
                        ></div>
                    );
                })}
            </div>
        </div>
    );
};

export default AddBox;