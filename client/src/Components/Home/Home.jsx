import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import {getRecipes, getRecipeByDiet, orderSort, orderPerScoreAscendent, orderPerScoreDesendent} from '../../Actions/Actions'
import {Link} from 'react-router-dom'
import RecipeCard from "../recipeCard/recipeCard";
import Paginado from "../paginado/paginado";
import SearchBar from '../SearchBar/SearchBar'
import './Home.css'

// import createStore from '../../store/store'
// const store = createStore()

export default function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        setCurrentPage(1)
        dispatch(getRecipes())
    }, [dispatch])
    const allRecipes = useSelector((state) => state.recipes)
    const [order, setOrden] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(9);
    const indexOfLastRecipe = currentPage * recipesPerPage //pag x 9
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage //primera = la ultima - recetas por pag
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    function handelReset(e) {
        setCurrentPage(1)
        e.preventDefault()
        dispatch(getRecipes())
    }
    
    function handelFiletrDiet(e) {
        setCurrentPage(1)
        dispatch(getRecipeByDiet(e.target.value))
    }

    function handelSort(e) {
        e.preventDefault()
        dispatch(orderSort(e.target.value))
        setCurrentPage(1)
        setOrden(e.target.value)
    }

    function handelScore(e) {
        e.preventDefault()
        dispatch(orderPerScoreAscendent(e.target.value))
        setCurrentPage(1)
        setOrden(e.target.value)
        console.log(e);
    }

    function handelOtherScore(e) {
        e.preventDefault()
        dispatch(orderPerScoreDesendent(e.target.value))
        setCurrentPage(1)
        setOrden(e.target.value)
        console.log(e);
    }

    return(
        
        <div className="all">
            <h1>no te olvides de descomentar en el back la ruta de get recipes del estado inical</h1>
            <div className="ordenamientos">
                <h1 className="principal">FOODS</h1>
                <SearchBar className='principal'/>
                <div className="filtros">
                    <Link to= '/add' > 
                        <button className="orders">Add</button>
                    </Link>
                    <button value='menormayor' className="orders" onClick={e => handelScore(e)}>
                        Order Lower to Higher
                    </button>
                    <button value='mayormenor' className="orders" onClick={e => handelOtherScore(e)}>
                        Order Higher to Lower
                    </button>

                    <select name="score" className="orders" defaultValue={'plaseholder'} onChange={e => handelSort(e)}>
                        <option hidden value='plaseholder'>Order By Name</option>
                        <option value='mayormenor'>A-Z</option>
                        <option value='menormayor'>Z-A</option>
                    </select>

                    <select name="score" className="orders" defaultValue={'plaseholder'} onChange={e => handelFiletrDiet(e)}> 
                        <option hidden value='plaseholder'>Order By Diets</option>
                        <option value="gluten free">Gluten Free</option>
                        <option value="ketogenic">Ketogenic</option>
                        <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="pescatarian">Pescatarian</option>
                        <option value="paleolithic">Pleolithic</option>
                        <option value="primal">Primal</option>
                        <option value="fodmap friendly">Fodmap friendly</option>
                        <option value="whole 30">Whole 30</option>
                        <option value='dairy free'>Dairy free</option>
                    </select>
                    <button className="orders" onClick={e => handelReset(e)}>Reset Filters</button>
                </div>
            </div>
            <div className="grillado">            
            {
                currentRecipes.length > 0? currentRecipes?.map(el => {
                    return(
                        <RecipeCard className='card' key={`${el.id}`}
                        id = {el.id}
                        name={el.name}
                        img={el.img}
                        diets = {el.diets}
                        // diets = {el.diets.name?.map(el => el[0].toUpperCase() + el.slice(1) + ' ')}
                        />
                        )
                    }
                    )
                    :
                    (   
                        <div className="NoMatch"> 
                            <h1>There is no match</h1>
                            <h1>Click on reset filters</h1>
                        </div>
                        )
            }
                    </div>
            <div className="pag">
                <Paginado
                recipePerPage = {recipesPerPage}
                allRecipes = {allRecipes.length}
                paginado = {paginado}
                />
            </div>
        </div>
    )
}


