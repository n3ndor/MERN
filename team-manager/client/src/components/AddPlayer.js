import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddPlayer = () => {
    const [name, setName] = useState("");
    const [preferredPosition, setPreferredPosition] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPlayer = {
            name,
            preferredPosition,
            gameOneStatus: "Undecided",
            gameTwoStatus: "Undecided",
            gameThreeStatus: "Undecided"
        };

        axios.post('http://localhost:8000/players', newPlayer)
            .then((res) => {
                navigate("/players/list");
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
            <h2>AddPlayer</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Player Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    {errors.name && <p>{errors.name.message}</p>}
                </label>
                <label>
                    Preferred Position:
                    <select value={preferredPosition} onChange={(e) => setPreferredPosition(e.target.value)}>
                        <option value="">--Select Position--</option>
                        <option value="Forward">Forward</option>
                        <option value="Midfielder">Midfielder</option>
                        <option value="Goalkeeper">Goalkeeper</option>
                    </select>
                </label>
                <button type="submit" disabled={!name}>Add Player</button>
            </form>
        </div>
    )
}

export default AddPlayer;
