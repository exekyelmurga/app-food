import React from "react";
import {Link} from 'react-router-dom'
import './landing.css'

export default function LandingDesing () {
    return (
        <div className="AllLand">
            <div id="barra">
                <h1 className="foods">FOOD</h1>
                <Link to = '/home'>
                    <button className="homeButton">Recipes</button>
                </Link>
                <Link to = '/add'>
                    <button className="addButton">Create One</button>
                </Link>
            </div>
            <img id='fondo' src="https://static.vecteezy.com/system/resources/previews/002/024/245/non_2x/fast-food-pattern-background-vector.jpg" alt='fondo' />
            <h1 className='intro'>HEALTHY RECIPES</h1>
            <h3 className="intro"> AND WHERE TO FIND THEM</h3>
            <Link to='/home'><button id='start' >Let's start ➣</button></Link> 

        </div>
    ) 
}