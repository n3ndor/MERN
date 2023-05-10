const playerControl = require("../controllers/players.controller");

module.exports = (app) => {
    app.post("/players", playerControl.createNewPlayer);
    app.get("/players", playerControl.getAllPlayers);
    app.delete("/players/:id", playerControl.deletePlayer);
    app.patch("/players/:id", playerControl.updatePlayer);
};