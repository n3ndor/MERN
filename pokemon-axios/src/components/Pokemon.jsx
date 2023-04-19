import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get("https://pokeapi.co/api/v2/pokemon?limit=807")
    //         .then(async (response) => {
    //             const pokemonsData = await Promise.all( // use Promise.all() to wait for all additional requests to complete.
    //                 response.data.results.map(async (poki) => { // map over the response.data.results array, which contains the basic information (name and URL) for each Pokemon.
    //                     const pokiDetails = await axios.get(poki.url); // make a request using the URL provided (poki.url)
    //                     return pokiDetails.data; // return the detailed information using pokiDetails.data and store it in the pokemonsData array.
    //                 })
    //             );
    //             setPokemons(pokemonsData); //update the state with the pokemonsData array, which now contains the detailed information for each Pokemon.
    //         })
    //         .catch((err) => console.log(err));
    // }, []);

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((response) => {
                console.log(response.data.results);
                setPokemons(response.data.results);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="container">
            <h2 className='m-5 text-primary'>Axios Pokemons: 🐸 {">"}🐍 {">"}🐊 {">"}🦎 {">"}🐉</h2>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr className="sticky-top top-0 bg-secondary text-white">
                        {/* <th>ID</th> */}
                        <th>Name</th>
                        <th>URL</th>
                        {/* <th>Base Experience</th>
                        <th>Abilities</th>
                        <th>Types</th>
                        <th>Stats</th> */}
                    </tr>
                </thead>
                <tbody>
                    {pokemons.map((poki, index) => (
                        <tr key={index}>
                            {/* <td>{poki.order}</td> */}
                            <td>{poki.name}</td>
                            <td>{poki.url}</td>
                            {/* <td>{poki.base_experience}</td>
                            <td>
                                {poki.abilities?.map((ability, idx) => (
                                    <div key={idx}>{ability.ability.name}</div>
                                ))}
                            </td>
                            <td>
                                {poki.types?.map((type, idx) => (
                                    <div key={idx}>{type.type.name}</div>
                                ))}
                            </td>
                            <td>
                                {poki.stats?.map((stat, idx) => (
                                    <div key={idx}>
                                        {stat.stat.name}: {stat.base_stat}
                                    </div>
                                ))}
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Pokemon;