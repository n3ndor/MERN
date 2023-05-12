import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListPlayers = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/players')
            .then((res) => {
                setPlayers(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/players/${id}`)
            .then((res) => {
                setPlayers(players.filter((player) => player._id !== id));
            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <div>
            <h2>ListPlayers</h2>
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => (
                        <tr key={player._id}>
                            <td><Link to={`/players/edit/${player._id}`}>{player.name}</Link></td>
                            <td>{player.preferredPosition}</td>
                            <td>
                                <button onClick={() => handleDelete(player._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListPlayers;
