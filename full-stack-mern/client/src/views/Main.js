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
        setPeople(people.filter(person => person._id !== personId));
    }

    return (
        <div>
            <PersonForm people={people} setPeople={setPeople} />
            <hr />
            <PersonList people={people} setPeople={setPeople} removeFromDom={removeFromDom} />
        </div>
    );
}

export default Main;