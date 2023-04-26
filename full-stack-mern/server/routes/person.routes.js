const PersonController = require("../controllers/person.controller") //import the controller
module.exports = (app) => {
    app.get("/api", PersonController.index);
    app.post('/api/people', PersonController.createPerson);
    //can be the same route as POST as long as we have a different http verb
    app.get("/api/people", PersonController.getAllPeople);
    app.get("api/people/:id", PersonController.getPerson);
}