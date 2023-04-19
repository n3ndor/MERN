import React from 'react';

function Peoples({ data }) {
    return (
        <div>
            <h2>Name: {data.name}</h2>
            <p>Birth Year: {data.birth_year}</p>
            <p>Eye Color: {data.eye_color}</p>
            <p>Gender: {data.gender}</p>
            <p>Hair Color: {data.hair_color}</p>
            <p>Height: {data.height}</p>
            <p>Mass: {data.mass}</p>
            <p>Skin Color: {data.skin_color}</p>
            <p>Homeworld: {data.homeworld[data.name]}</p>
            <p>URL: {data.url}</p>
        </div>
    );
}

export default Peoples;