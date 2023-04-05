import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        const newUser = { firstname, lastname, email, password, confirm };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirm("");
    };

    return (
        <div>
            <form onSubmit={createUser}>
                <h2>Hook Form:</h2>
                <div class="input">
                    <label>First Name: </label>
                    <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div class="input">
                    <label>Username: </label>
                    <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div class="input">
                    <label>Email Address: </label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="input">
                    <label>Password: </label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div class="input">
                    <label>Confirm: </label>
                    <input type="text" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
                </div>
                {/* <input class="button" type="submit" value="Create User" /> */}
            </form>

            <h3 >Your Form Data</h3>
            <div class="display">
                <label>First Name: {firstname}</label>
                <label>Last Name: {lastname}</label>
                <label>Email: {email}</label>
                <label>Password: {password}</label>
                <label>Confirm Password: {confirm}</label>

            </div>
        </div>
    );
};

export default UserForm;
