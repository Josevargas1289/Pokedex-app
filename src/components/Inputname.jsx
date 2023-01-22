import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUsername } from '../store/slices/userName.slice';
import pikashucard from '../assets/img/pngegg.png'
import pokedexImg from '../assets/img/image11.png'

const Inputname = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputvalue] = useState('')
    const navigate = useNavigate();

    const ClickButton = () => {

        dispatch(changeUsername(inputValue))
        navigate('/pokedex')

    }

    return (
        <div className='input-name'>

            <div className='nav-input'>
                <img className='nav-img' src={pokedexImg} alt="" />

            </div>
            <div className='input-card'>
                <h1 className='animate__animated animate__bounce animate__bounceIn'>Hello Trainer!</h1>
                <img className='img-card animate__animated animate__bounce animate__backInLeft' src={pikashucard} alt="" />
                <div className='container-input-name'>
                    <h4 className='subtitle-card'>Give me your name to start</h4>
                    <div className='container-input-btn'>
                        <input type="text" value={inputValue} onChange={e => setInputvalue(e.target.value)} />
                        <button onClick={() => ClickButton()}><i className='bx bxs-paper-plane bx-md'></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inputname;