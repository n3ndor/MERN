import React from 'react';

function Species({ data }) {
    return (
        <>
            <h2>Name: {data.name}</h2>
            <p>Classification: {data.classification}</p>
            <p>Designation: {data.designation}</p>
            <p>Average Height: {data.average_height} cm</p>
            <p>Average Lifespan: {data.average_lifespan} years</p>
            <p>Language: {data.language}</p>

        </>
    );
}

export default Species;