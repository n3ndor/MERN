const PersonController = require("../controllers/person.controller") //import the controller
module.exports = (app) => {
    app.get("/api", PersonController.index);
    app.post('/api/people', PersonController.createPerson);
}