import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Pokedex = () => {




    const Username = useSelector((state) => state.Username)
    const navigate = useNavigate();

    const backPage = () => {
        navigate(-1)
    }
    return (
        <div className='container-Pokedex'>
            <div className='pokedex'>
                <h1 className='title-pokedex'>Pokedex</h1>
                <h3 className='subtitle-pokedex'>Welcome <b className='name'>{Username}</b>, here you can find your favorite pokemon</h3>
                <button onClick={backPage} className='btn-back'><i class='bx bx-left-arrow-circle bx-lg'></i></button>
            </div>
        </div>
    );
};

export default Pokedex;