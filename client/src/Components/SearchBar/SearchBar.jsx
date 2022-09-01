import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {getRecipeName} from '../../Actions/Actions'
import './SearchBar.css'

export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    
    function handelImputChange(e) {
        e.preventDefault()
        setName(e.target.value)
        console.log(name);
    }
    function handelSubmit(e) {
        e.preventDefault()
        dispatch(getRecipeName(name))
    }

    return(
        <span className="barra">
            <input type= 'text'
            placeholder = 'Search recipe...'
            onChange = {(e) => handelImputChange(e)}
            className = 'input'
            />
            <button type='submit' id="cursor" onClick={(e) => handelSubmit(e)}>Find</button>
        </span>
    )
}