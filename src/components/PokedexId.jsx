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
    console.log(pokemonId);

    const typeOne = pokemonId?.types?.[1]?.type.name
    const typeTwo = pokemonId?.types?.[0]?.type.name


    const changeColorCardPokemon = () => {
        if (typeTwo === 'normal' || typeOne === 'normal') {
            return '#735159'

        } else if (typeTwo === 'fighting' || typeOne === '') {
            return '#973f26'
        } else if (typeTwo === 'flying' || typeOne === '') {
            return '#48677b'
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
        } else {
            return 'gray'
        }

    }

    const changeColorTypeOne = () => {
        if (typeOne === 'normal') {
            return '#735159'
        } else if (typeOne === 'poison') {
            return '#5b2d86'
        } else if (typeOne === 'ground') {
            return '#ffeb3b'
        } else if (typeOne === 'rock') {
            return '#46180b'
        } else if (typeOne === 'bug') {
            return '#8bc34a'
        } else if (typeOne === 'ghost') {
            return '#31336a'
        } else if (typeOne === 'fire') {
            return '#fb6c6c'
        } else if (typeOne === 'water') {
            return '#70b7fa'
        } else if (typeOne === 'grass') {
            return '#48d0b0'
        } else if (typeOne === 'electric') {
            return '#e2e02d'
        } else if (typeOne === 'ice') {
            return '#86d2f4'
        } else if (typeOne === 'dragon') {
            return '#448a94'
        } else if (typeOne === 'dark') {
            return '#030706'
        } else if (typeOne === 'flying') {
            return '#48677b'
        }
        else if (typeOne === 'fairy') {
            return '#981844'
        } else {
            return 'gray'
        }

    }

    const changeColorTypeTwo = () => {
        if (typeTwo === 'normal') {
            return '#735159'
        } else if (typeTwo === 'poison') {
            return '#5b2d86'
        } else if (typeTwo === 'ground') {
            return '#ffeb3b'
        } else if (typeTwo === 'rock') {
            return '#46180b'
        } else if (typeTwo === 'bug') {
            return '#8bc34a'
        } else if (typeTwo === 'ghost') {
            return '#31336a'
        } else if (typeTwo === 'fire') {
            return '#fb6c6c'
        } else if (typeTwo === 'water') {
            return '#70b7fa'
        } else if (typeTwo === 'grass') {
            return '#48d0b0'
        } else if (typeTwo === 'electric') {
            return '#e2e02d'
        } else if (typeTwo === 'ice') {
            return '#86d2f4'
        } else if (typeTwo === 'dragon') {
            return '#448a94'
        } else if (typeTwo === 'dark') {
            return '#030706'
        } else if (typeOne === 'flying') {
            return '#48677b'
        }
        else if (typeTwo === 'fairy') {
            return '#981844'
        } else {
            return 'gray'
        }
    }

    function firstLetterUpCaseName(text) {
        let name = text?.split(" ");
        return name?.map((e) => e[0].toUpperCase() + e.slice(1)).join(" ");
    }

    const typeOneOn = () => {
        if (typeOne === undefined) {
            return 'none'
        } else {
            return 'block'
        }
    }

    const typetwoOn = () => {
        if (typeTwo === undefined) {
            return 'none'
        } else {
            return 'block'
        }
    }
    const ProgressBar = ({ value, max, color, width }) => {
        return (
            <Container color={color} width={width}>
                <progress value={40} max={max} />
                <span>{(value / max) * 200}%</span>
            </Container>
        );
    };




    const upperCaseName = firstLetterUpCaseName(pokemonId.name);

    return (

        <div className='container-pokemonId'>
            <div className='nav'>
                <img className='nav-img' src={pokedexImg} alt="" />
            </div >
            <div className='card-pokemonId'>
                <div
                    className='card-pokemon-id-img'
                    style={{ background: changeColorCardPokemon() }}
                >
                    <img className='img-pokemonId' src={pokemonId.sprites?.other?.dream_world?.front_default} alt="" />
                </div>
                <h1 className='title-id'
                    style={{ color: changeColorCardPokemon() }}
                >{`#${pokemonId.id}`}</h1>
                <h1 className='TitleName'
                    style={{ color: changeColorCardPokemon() }}
                > <span className='pokemonId-name-card'></span> {upperCaseName} <span className='pokemonId-name-card'></span>
                </h1>
                <div className='container-type'>

                

                    <div className='card-pokemonid-type'>
                    <h1 className='TitleName'> <span className='pokemonId-name-card'></span> Type <span className='pokemonId-name-card'></span>
                </h1>
                        
                        <div className='container-type-one-two'>

                            <div className='type1'
                                style={{ background: changeColorTypeOne(), display: typeOneOn() }}
                            >
                                {typeOne}
                            </div>

                            <div className='type2'
                                style={{ background: changeColorTypeTwo(), display: typetwoOn() }} >
                                {typeTwo}
                            </div>
                        </div>


                    </div>

                    <div className='card-pokemonid-Abilities'>
                    <h1 className='TitleName'> <span className='pokemonId-name-card'></span> Abilities <span className='pokemonId-name-card'></span>
                </h1>
                        <div className='container-type-one-two ' >
                            {
                                pokemonId.abilities?.map((a) => (
                                    <div className='type1 type-hability' key={a.ability.url}>
                                        {a.ability.name}
                                    </div >
                                ))

                            }
                        </div>
                    </div>

                </div>
                <div className='progress-bar'>

                <h1 className='TitleName'> <span className='pokemonId-name-card'></span> Stats <span className='pokemonId-name-card'></span>
                </h1>
                    <div>
                        <span className='span-stats'>HP:</span>
                        <span>{pokemonId?.stats?.[1]?.base_stat}
                            <progress  value={pokemonId?.stats?.[1]?.base_stat} max="200" aria-colspan='jose'></progress>
                        </span><span>200</span>

                    </div>
                    <div>
                        <span className='span-stats'>Attack:</span>
                        <span>{pokemonId?.stats?.[2]?.base_stat}
                            <progress value={pokemonId?.stats?.[2]?.base_stat} max="200"></progress>
                        </span><span>200</span>

                    </div>

                    <div>
                        <span className='span-stats'>Defense:</span>
                        <span>{pokemonId?.stats?.[3]?.base_stat}
                            <progress value={pokemonId?.stats?.[3]?.base_stat} max="150"></progress>
                        </span><span>150</span>
                    </div>

                    <div>
                        <span className='span-stats'>Speed:</span>
                        <span>{pokemonId?.stats?.[5]?.base_stat}
                            <progress value={pokemonId?.stats?.[5]?.base_stat} max="150"></progress>
                        </span><span>200</span>
                    </div>




                </div>

            </div>
        </div>
    );
};

export default PokedexId;