import React, { useEffect, useState } from 'react';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
import axios from "axios"

const Main = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res => {
                console.log(res.data);
                setPeople(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const removeFromDom = personId => {
        axios.delete("http://localhost:8000/api/people/" + personId)
            .then((res) => {
                console.log(res.data);
                setPeople(people.filter(person => person._id !== personId));
            })
            .catch((err) => console.log(err))
    }

    const createPeople = peopleParam => {
        axios.post("http://localhost:8000/api/people", peopleParam)
            .then(res => {
                console.log(res.data);
                setPeople([...people, res.data])
            })
            .catch((err) => console.log(err))
    }


    return (
        <div>
            <PersonForm onSubmitProp={createPeople} initialFirstName="" initialLastName="" />
            <hr />
            <PersonList people={people} removeFromDom={removeFromDom} />
        </div>
    );
}

export default Main;