import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const Pokedex = () => {

    const Username = useSelector((state) => state.Username)
    const navigate = useNavigate();
    const [pokemons, setPokemons]= useState([]);

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
        .then((res)=>setPokemons(res.data.results))
        
        

    },[]);
   console.log(pokemons);

    const backPage = () => {
        navigate(-1)
    }
    return (
        <div className='container-Pokedex'>
            <div className='pokedex'>
                <h1 className='title-pokedex'>Pokedex</h1>
                <h3 className='subtitle-pokedex'>Welcome <b className='name'>{Username}</b>, here you can find your favorite pokemon</h3>
                <br />
                <ul className='grid'>
                    {
                        pokemons.map(pokemon=>(
                                <PokemonCard 
                                key={pokemon.url}
                                url={pokemon.url}
                                />
                        ))
                    }
                </ul>
                <button onClick={backPage} className='btn-back'><i className='bx bx-left-arrow-circle bx-lg'></i></button>
            </div>
        </div>
    );
};

export default Pokedex;