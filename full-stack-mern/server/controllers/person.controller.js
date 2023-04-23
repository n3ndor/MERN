const Person = require("../models/person.model");

module.exports.index = (request, response) => { //exporting a key:val pair of index : function
    response.json({ //where we are setting the API's response to the requesting client
        message: "Hello MERN World"
    });
}

module.exports.createPerson = (request, response) => {
    // Mongoose's "create" method is run using our Person model to add a new person to our db's person collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    Person.create(request.body) //This will use whatever the body of the client's request sends over
        .then(person => response.json(person))
        .catch(err => response.json(err));
}