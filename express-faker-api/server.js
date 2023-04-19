const express = require("express");
const app = express();
const port = 8000;

const { faker } = require("@faker-js/faker");

const createUser = () => ({

    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    _id: faker.datatype.uuid(),

});

const createCompany = () => ({

    _id: faker.datatype.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    },

});

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
})

app.get("/api/company/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
})

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const result = {
        user: newUser,
        company: newCompany,
    }
    res.json(result)

})

app.listen(port, () => console.log(`Listening on port: ${port}`));