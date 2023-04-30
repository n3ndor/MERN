import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const PersonList = (props) => {
    const { removeFromDom, people, setPeople } = props;
    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => {
                removeFromDom(personId)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            {
                people.map((person, index) => {
                    return (
                        <div key={index}>
                            <Link to={"/people/" + person._id}>
                                {person.lastName}, {person.firstName}
                            </Link>
                            |
                            <Link to={"/people/edit/" + person._id}>
                                Edit
                            </Link>
                            |
                            <button onClick={(e) => { deletePerson(person._id) }}>
                                Delete
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default PersonList;

