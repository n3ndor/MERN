import React from "react";

const PersonCard = (props) => {
    const { firstName, lastName, age, hair } = props;
    return (
        <div>
            <h2> {lastName}, {firstName} </h2>
            <p> Age: {age} </p>
            <p> Hair Color: {hair} </p>
        </div>
    )
}

export default PersonCard;