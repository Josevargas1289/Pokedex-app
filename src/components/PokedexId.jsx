import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import pokedexImg from '../assets/img/image11.png'


const PokedexId = () => {
    const { id } = useParams();

    const [pokemonId, setPokemonId] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => setPokemonId(res.data))

    }, []);
    // console.log(pokemonId);

    return (

        <div className='container-pokemonId'>
            <div className='nav'>
                <img className='nav-img' src={pokedexImg} alt="" />
            </div >
            <div className='card-pokemonId'>
                <h1>Pokemons id</h1>
                <h1>{pokemonId.name}</h1>
                <img className='img-pokemonId' src={pokemonId.sprites?.other?.dream_world?.front_default} alt="" />
            </div>

            
        </div>
    );
};

export default PokedexId;