import React, { useState } from "react";

function Pokemon() {
    const [pokemon, setPokemon] = useState([]); //held the items in a new array


    fetch("https://pokeapi.co/api/v2/pokemon?limit=807')")
        .then(response => {
            return response.json()
        })
        .then(response => {
            setPokemon(response.results)
        })
        .catch((err) => {
            console.log(err);
        })
        ;



    return (
        <div>
            <ol>
                {pokemon.map((pokemonObj, index) => {
                    return (<li key={index}>{pokemonObj.name}</li>)
                })}
            </ol>
        </div>
    );
}


export default Pokemon;