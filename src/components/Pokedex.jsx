import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Pokedex = () => {
    const Username = useSelector((state) => state.Username)
    return (
        <div>
            <h1>Pokedex</h1>
            <h3><b>{Username}</b></h3>
        </div>
    );
};

export default Pokedex;