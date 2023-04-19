import React from 'react';

function Planets({ data }) {
    return (
        <>
            <h2>{data.name}</h2>
            <p>Diameter: {data.diameter} km</p>
            <p>Rotation Period: {data.rotation_period} hours</p>
            <p>Orbital Period: {data.orbital_period} days</p>
            <p>Gravity: {data.gravity}</p>
            <p>Population: {data.population}</p>
            <p>Climate: {data.climate}</p>
            <p>Terrain: {data.terrain}</p>
            <p>Surface Water: {data.surface_water} %</p>



        </>
    );
}

export default Planets;