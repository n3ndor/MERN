import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import PersonForm from './PersonForm';
import DeleteButton from './DeleteButton';

const Update = (props) => {
    const { id } = props;
    const [person, setPerson] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    const updatePerson = person => {
        axios.put('http://localhost:8000/api/people/' + id, person)
            .then(res => {
                console.log(res);
                // navigate("/home");
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h2>Update a Person</h2>
            {
                loaded && (
                    <>
                        <PersonForm onSubmitProp={updatePerson}
                            initialFirstName={person.firstName}
                            initialLastName={person.lastName} />
                        <DeleteButton personId={person._id}
                            successCallback={() => navigate("/")} />
                    </>
                )}
        </div>
    )
}
export default Update;