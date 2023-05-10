import React from 'react';
import { Link } from 'react-router-dom';

const ManagePlayers = ({ setActiveTab }) => {
    return (
        <div>
            <Link to="/players/list" onClick={() => setActiveTab('list')} style={{ marginRight: '10px' }}>List</Link>
            <Link to="/players/addplayer" onClick={() => setActiveTab('addplayer')}>Add Player</Link>
        </div>
    );
}

export default ManagePlayers;
