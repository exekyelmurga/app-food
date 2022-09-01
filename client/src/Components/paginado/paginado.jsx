import React from "react";
import './paginado.css'
export default function Paginado({recipePerPage, allRecipes, paginado}) {
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(allRecipes/recipePerPage); i++) {
        pageNumbers.push(i)
    }
    return(
        <nav>
            <ul>
                {
                    pageNumbers?.map((number) => {
                        return <div className="numeritos" key={`${number}-paginado`}>
                            <button id="boton" onClick={() => paginado(number)}>{number}</button>
                        </div>
                    })
                }
            </ul>
        </nav>
    )
}