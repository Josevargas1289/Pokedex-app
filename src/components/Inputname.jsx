import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUsername } from '../store/slices/userName.slice';

const Inputname = () => {
    const dispatch = useDispatch();
    const[inputValue, setInputvalue]= useState('')
    const navigate = useNavigate();

    const ClickButton =()=>{
        dispatch(changeUsername(inputValue))
        navigate('/pokedex')

    }

    return (
        <div>
            <h1>Input name</h1>
            <input type="text" value={inputValue} onChange={e=>setInputvalue(e.target.value)}/>
            <button onClick={()=>ClickButton()}>Submit</button>
        </div>
    );
};

export default Inputname;