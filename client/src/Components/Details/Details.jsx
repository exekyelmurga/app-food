import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDetail } from "../../Actions/Actions"
import { Link } from "react-router-dom"
import { useParams } from "react-router"
import './Details.css'

export default function Detail() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const recipe = useSelector((state) => state.details)
    var array = []
    array.push(id)
    console.log(recipe)
    
    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])

    
    if(id.length > 9 ){
        return (
            <div className='componente'>
                <div className="bottom-card ">
                <Link to='/home'><button className="button-back">Back</button></Link>
                <h1 className = 'name-detail-db'>{recipe.name}</h1>
                <img className ='img-detail-db' src={recipe.img} alt= {recipe.name + ' image'} />
                <h2 className='HS-detail'>HealthScore: {recipe.HS}</h2>
                <h1 className='steps-detail'>Steps: </h1>
                <p className="steps-detail">{recipe.steps}</p>
                <h1 className='diet-detail'>Diet(s): {recipe.diets?.map(el => el.name[0].toUpperCase()+ el.name.slice(1)) + ' '}</h1>
                <p className='steps-detail'>{recipe.steps}</p>
                <h1 className='resumen'>Summary: </h1>
                <p className='resumen'>{recipe.resume}</p>
                    </div>                            
            </div>    
        )
    }else {
        return (
            <div className='componente'>
                <div className='bottom-card'>    
                <Link to='/home'><button className="button-back">Back</button></Link>                           
                <h1 className= 'name-detail'>{recipe.name}</h1>
                <img className='img-detail'src={recipe.img} alt= {recipe.name + ' image'}/>
                    <h2 className='HS-detail'>HealthScore: {recipe.HS}</h2>
                    <h2 className='types'>Dish Type(s): {recipe.dishTypes}</h2>
                    <h1 className='diet-detail'>Diet(s): {recipe.diets}</h1>
                    <h1 className='steps-detail'>Steps:</h1>
                    <p className='steps-detail'>{recipe.steps}</p>
                    <h1 className='resumen'>Summary: </h1>
                    <p className='resumen'>{recipe.resume}</p>   
                </div>
            </div>    
        )
    }
}

    