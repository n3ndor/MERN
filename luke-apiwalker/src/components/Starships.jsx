import React from 'react';

function Starships({ data }) {
    return (
        <>
            <h2>Name: {data.name}</h2>
            <p>Model: {data.model}</p>
            <p>Manufacturer: {data.manufacturer}</p>
            <p>Cost: {data.cost_in_credits} Galactic Credits</p>
            <p>Passengers: {data.passengers} non-essential people this starship can transport</p>
            <p>Length: {data.length} meter</p>
            <p>Crew: {data.crew} person needed to run or pilot this starship.</p>
            <p>Max Atmosphering Speed: {data.max_atmosphering_speed}</p>
            <p>Hyperdrive Rating: {data.hyperdrive_rating}</p>
            <p>Consumables without resupply: max {data.consumables}</p>
            <p>Cargo  Capacity: max {data.cargo_capacity} kg</p>
        </>
    );
}

export default Starships;