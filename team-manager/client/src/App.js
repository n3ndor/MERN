import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import ManagePlayers from './components/ManagePlayers';
import ListPlayers from './components/ListPlayers';
import AddPlayer from './components/AddPlayer';
import StatusPlayers from './components/StatusPlayers';

function App() {
  const [activeTab, setActiveTab] = useState("list");

  return (
    <div className="App">
      <h2>Team Manager</h2>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/players/list">Manage Players</Link></li>
            <li><Link to="/status/game/:id">Manage Status</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/players/list" element={<><ManagePlayers setActiveTab={setActiveTab} /><ListPlayers activeTab={activeTab} /></>} />
          <Route path="/players/addplayer" element={<><ManagePlayers setActiveTab={setActiveTab} /><AddPlayer activeTab={activeTab} /></>} />
          <Route path="/status/game/:id" element={<StatusPlayers />} />
          <Route path="/" element={<Navigate to="/players/list" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
