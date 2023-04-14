import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get('https://pokeapi.co/api/v2/pokemon?limit=807')
    //         .then((response) => {
    //             const pokemonsData = response.data.results;
    //             const detailedDataRequests = pokemonsData.map((pokemon) => axios.get(pokemon.url));
    //             axios.all(detailedDataRequests).then(
    //                 axios.spread((...responses) => {
    //                     const detailedData = responses.map((response) => response.data);
    //                     setPokemons(detailedData);
    //                 }),
    //             );
    //         })
    //         .catch((err) => console.log(err));
    // }, []);


    useEffect(() => {
        fetchPokemons();



    }, []);

    const fetchPokemons = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
            const pokemonsData = await Promise.all(
                response.data.results.map(async (pokemon) => {
                    const pokemonDetails = await axios.get(pokemon.url);
                    return {
                        id: pokemonDetails.data.id,
                        name: pokemonDetails.data.name,
                        types: pokemonDetails.data.types.map((type) => type.type.name).join(', '),
                        height: pokemonDetails.data.height,
                        weight: pokemonDetails.data.weight,
                    };
                })
            );
            setPokemons(pokemonsData);
        } catch (error) {
            console.error('Error fetching pokemons:', error);
        }
    };

    return (
        <div className="container">
            <h1 className="text-center my-4">Pokémon List</h1>

            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Type(s)</th>
                        <th>Height</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemons.map((pokemon) => (
                        <tr key={pokemon.id}>
                            <td>{pokemon.id}</td>
                            <td>{pokemon.name}</td>
                            <td>{pokemon.types}</td>
                            <td>{pokemon.height}</td>
                            <td>{pokemon.weight}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Pokemon;