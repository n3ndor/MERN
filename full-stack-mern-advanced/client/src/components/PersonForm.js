import React, { useState } from 'react'
import axios from 'axios';

const PersonForm = (props) => {
    const { initialFirstName, initialLastName, onSubmitProp } = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitHandler({ firstName, lastName });
    }

    return (
        <form>
            <p>
                <label>First Name</label><br />
                <input type="text" name="firstName" value={firstName}
                    onChange={(e) => setFirstName(e.target.value)} />
            </p>
            <p>
                <label>Last Name</label><br />
                <input type="text" name="lastName" value={lastName}
                    onChange={(e) => setLastName(e.target.value)} />
            </p>
            <input type="submit" />
        </form>
    )
}
export default PersonForm;

