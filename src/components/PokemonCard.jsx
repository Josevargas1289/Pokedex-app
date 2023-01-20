import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ url }) => {

    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState({});


    useEffect(() => {
        axios.get(url)
            .then((res) => setPokemon(res.data))

    }, [])
    console.log(pokemon);

    const typeOne = pokemon?.types?.[1]?.type.name
    const typeTwo = pokemon?.types?.[0]?.type.name

    const changeColorCardPokemon = () => {
        if (typeTwo === 'normal' || typeOne === 'normal') {
            return '#735159'

        } else if (typeTwo === 'fighting' || typeOne === '') {
            return '#973f26'
        }

        else if (typeTwo === 'poison' || typeOne === '') {
            return '#5b2d86'
        } else if (typeTwo === 'ground' || typeOne === '') {
            return '#ffeb3b'
        } else if (typeTwo === 'rock' || typeOne === '') {
            return '#46180b'
        } else if (typeTwo === 'bug' || typeOne === '') {
            return '#8bc34a'
        } else if (typeTwo === 'ghost' || typeOne === '') {
            return '#31336a'
        } else if (typeTwo === 'fire' || typeOne === '') {
            return '#fb6c6c'
        } else if (typeTwo === 'water' || typeOne === '') {
            return '#70b7fa'
        } else if (typeTwo === 'grass' || typeOne === '') {
            return '#48d0b0'
        } else if (typeTwo === 'electric' || typeOne === '') {
            return '#e2e02d'
        } else if (typeTwo === 'ice' || typeOne === '') {
            return '#86d2f4'
        } else if (typeTwo === 'dragon' || typeOne === '') {
            return '#448a94'
        } else if (typeTwo === 'dark' || typeOne === '') {
            return '#030706'
        } else if (typeTwo === 'fairy' || typeOne === '') {
            return '#981844'
        }

    }

    function firstLetterUpCaseName(text) {
        let name = text?.split(" ");
        return name?.map((e) => e[0].toUpperCase() + e.slice(1)).join(" ");
    }
    const upperCaseName = firstLetterUpCaseName(pokemon.name);


    return (

        <div className='container-card-pokemon'
            style={{ background: changeColorCardPokemon() }}
            onClick={() => navigate(`/pokedex/${pokemon.id}`)}
        >
                <div className='container-img-pokemon'>

                    <img className='img-pokemon-card' src={pokemon.sprites?.other?.dream_world?.front_default
                    } alt="" />
                </div>

                <div className='card-pokemon'>
                    <b className='title-car-pokemon'
                        style={{ color: changeColorCardPokemon() }}>
                        {upperCaseName}
                    </b>
                    <div className='card-pokemon-inside'>
                        <div className='pokemon-card-info'>
                            <p> {typeOne}/{typeTwo}</p>
                            <b>Type:</b>
                        </div>
                    </div>

                </div>
          
        </div>

    );
};

export default PokemonCard;