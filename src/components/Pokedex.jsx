import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import pokedexImg from '../assets/img/image11.png'

const Pokedex = () => {

    const Username = useSelector((state) => state.Username)
    const navigate = useNavigate();
    const [pokemons, setPokemons] = useState([]);
    const [inputSearch, setInputSearch] = useState('')
    const [pokemoType, setPokemonType] = useState([]);


    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
            .then((res) => setPokemons(res.data.results))

        axios.get('https://pokeapi.co/api/v2/type')
            .then((res) => setPokemonType(res.data.results))



    }, []);
    
    const [page, setPage] = useState(1);
    const pokemonsPerpage = 9;
    const lastIndex = page * pokemonsPerpage;
    const firstIndex = lastIndex - pokemonsPerpage;
    const pokemonPaginated = pokemons.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(pokemons.length / pokemonsPerpage)

    const pages = []
    
    for(let i = 1; i<= totalPages; i++){
        pages.push(i)
    }

    console.log(pokemoType);

    const backPage = () => {
        navigate(-1)

    }

    const search = () => {
        navigate(`/pokedex/${inputSearch.toLowerCase()}`)
    }
    const filterType = (e) => {
        axios.get(e.target.value)
            .then((res) => setPokemons(res.data.pokemon))
    }

    const numbers = [];
    
      for (let i = page - 3; i <= page + 2; i++) {
        if (i >= page && i <= totalPages) {
          numbers.push(i);
        }
      }


    return (

        <div className='container-Pokedex'>
            <div className='nav'>
                <img className='nav-img' src={pokedexImg} alt="" />
            </div>
            <div className='pokedex'>
                <h1 className='title-pokedex'>Pokedex</h1>
                <h3 className='subtitle-pokedex'>Welcome <b className='name'>{Username}</b>, here you can find your favorite pokemon</h3>
                <br />
                <div className='container-search'>
                    <input type="text"
                        placeholder='search pokemon'
                        value={inputSearch}
                        onChange={(e) => setInputSearch(e.target.value)}
                    />
                    <button className='btn-search' onClick={search}>Search</button>


                    <select onChange={filterType} name="" id="">
                        {
                            pokemoType.map((type) => (
                                <option value={type.url} key={type.url}>
                                    {type.name}
                                </option>

                            ))
                        }

                    </select>
                    
                </div>
                <div className='pagination'>
                    {/* {`PAGE ${page}`} */}
                <button onClick={() => setPage(page - 1)} className='pagination-btn'
                    disabled={page === 1}
                    
                ><i className='bx bxs-chevrons-left bx-md'></i>
                </button>

                {numbers.map((number) => (
            <button
              key={number}
              className="number-pages"
              onClick={() => setPage(number)}>
              {number}
            </button>
          ))}
              
                <button onClick={() => setPage(page +1)} className='pagination-btn'
                    disabled={page === totalPages}
                ><i className='bx bxs-chevrons-right bx-md'></i>
                </button>
                {/* {`${totalPages} TOTAL`} */}

            </div>
                <ul className='grid'>
                    {
                        pokemonPaginated?.map(pokemon => (
                            <PokemonCard
                                key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                                url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                            />
                        ))
                    }
                </ul>
                <button onClick={backPage} className='btn-back'><i className='bx bx-left-arrow-circle bx-sm'></i></button>
            </div>
            
        </div>
    );
};

export default Pokedex;