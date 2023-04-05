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
                <h2>More Forms:</h2>
                <div class="input">
                    <label>First Name: </label>
                    <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                </div>

                {firstname.length < 2 && firstname.length !== 0 ? <p class="notValid">First Name must be at least 2 characters</p> : <p></p>}

                <div class="input">
                    <label>Username: </label>
                    <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                </div>

                {lastname.length < 2 && lastname.length !== 0 ? <p class="notValid">Last Name must be at least 2 characters</p> : <p></p>}

                <div class="input">
                    <label>Email Address: </label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                {email.length < 5 && email.length !== 0 ? <p class="notValid">Email must be at least 5 characters</p> : <p></p>}

                <div class="input">
                    <label>Password: </label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                {password.length < 8 && password.length !== 0 ? <p class="notValid">Password must be at least 8 characters</p> : <p></p>}

                <div class="input">
                    <label>Confirm: </label>
                    <input type="text" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
                </div>

                {confirm.length < 8 && confirm.length !== 0 ? <p class="notValid">Password Confirmation must be at least 8 characters</p> : <p></p>}
                {confirm !== password ? <p class="notValid">Password must match</p> : <p></p>}


                {/* <input class="button" type="submit" value="Create User" /> */}
            </form>


        </div>
    );
};

export default UserForm;
