import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdatePlayer = () => {
    const [name, setName] = useState("");
    const [preferredPosition, setPreferredPosition] = useState("");
    const [gameOneStatus, setGameOneStatus] = useState("Undecided");
    const [gameTwoStatus, setGameTwoStatus] = useState("Undecided");
    const [gameThreeStatus, setGameThreeStatus] = useState("Undecided");
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/players/${id}`)
            .then(res => {
                setName(res.data.name);
                setPreferredPosition(res.data.preferredPosition);
                setGameOneStatus(res.data.gameOneStatus);
                setGameTwoStatus(res.data.gameTwoStatus);
                setGameThreeStatus(res.data.gameThreeStatus);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, [id]);

    const updatePlayer = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/players/${id}`, { name, preferredPosition, gameOneStatus, gameTwoStatus, gameThreeStatus })
            .then(() => navigate('/players/list'))
            .catch(err => console.log(err));
    };

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>Update Player</h2>
            <form onSubmit={updatePlayer}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <select value={preferredPosition} onChange={e => setPreferredPosition(e.target.value)}>
                    <option value="">Choose a Position</option>
                    <option value="Forward">Forward</option>
                    <option value="Midfielder">Midfielder</option>
                    <option value="Goalkeeper">Goalkeeper</option>
                </select>
                <select value={gameOneStatus} onChange={e => setGameOneStatus(e.target.value)}>
                    <option value="Undecided">Undecided</option>
                    <option value="Playing">Playing</option>
                    <option value="Not Playing">Not Playing</option>
                </select>
                <select value={gameTwoStatus} onChange={e => setGameTwoStatus(e.target.value)}>
                    <option value="Undecided">Undecided</option>
                    <option value="Playing">Playing</option>
                    <option value="Not Playing">Not Playing</option>
                </select>
                <select value={gameThreeStatus} onChange={e => setGameThreeStatus(e.target.value)}>
                    <option value="Undecided">Undecided</option>
                    <option value="Playing">Playing</option>
                    <option value="Not Playing">Not Playing</option>
                </select>
                <input type="submit" value="Update Player" />
            </form>
        </div>
    );
}

export default UpdatePlayer;