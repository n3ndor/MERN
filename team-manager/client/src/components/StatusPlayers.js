import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StatusPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [game, setGame] = useState('gameOneStatus');

    useEffect(() => {
        axios.get('http://localhost:8000/players')
            .then(res => setPlayers(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleStatusChange = (id, status) => {
        axios.patch(`http://localhost:8000/players/${id}`, { [game]: status })
            .then(res => {
                setPlayers(players.map(player => player._id === id ? res.data : player));
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h2>StatusPlayers</h2>
            <Link onClick={() => setGame('gameOneStatus')}>Game 1</Link> |
            <Link onClick={() => setGame('gameTwoStatus')}> Game 2</Link> |
            <Link onClick={() => setGame('gameThreeStatus')}> Game 3</Link>
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => (
                        <tr key={player._id}>
                            <td>{player.name}</td>
                            <td>
                                <button onClick={() => handleStatusChange(player._id, 'Playing')} style={{ background: player[game] === 'Playing' ? 'green' : '' }}>Playing</button>
                                <button onClick={() => handleStatusChange(player._id, 'Not Playing')} style={{ background: player[game] === 'Not Playing' ? 'red' : '' }}>Not Playing</button>
                                <button onClick={() => handleStatusChange(player._id, 'Undecided')} style={{ background: player[game] === 'Undecided' ? 'yellow' : '' }}>Undecided</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default StatusPlayers;
