import React, { useState } from "react";

const PersonCard = (props) => {
    const { firstName, lastName, hair } = props;
    const [age, setAge] = useState(props.age);

    // const { firstName, lastName, age, hair } = props;
    // const [stateAge, setStateAge] = useState(age);
    // and change <p> Age: {age} </p>  to { stateAge }
    //          button onClick={(event) => setAge(stateAge + 1)}>

    return (
        <div>
            <h2> {lastName}, {firstName} </h2>
            <p> Age: {age} </p>
            <p> Hair Color: {hair} </p>
            <button onClick={(event) => setAge(age + 1)}>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard;