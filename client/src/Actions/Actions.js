import axios from 'axios'

export function getRecipes() {
    return async function(dispatch){
        try{
            let json = await axios.get('http://localhost:3001/recipes', {
            });
            return dispatch({
                type:  'GET_RECIPES',
                payload: json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}

export function getRecipeName(name) {
    return async function (dispatch) {
        try {
            let json = await axios.get(`http://localhost:3001/recipes?name=${name}`, {
            });
            return dispatch({
                type: 'GET_RECIPES_NAME',
                payload: json.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getRecipeByDiet(payload) {
    return {
        type: 'GET_RECIPE_BY_DIET',
        payload
    }
}

export function orderSort(payload){
    return {
        type: 'ORDER_SORT',
        payload
    }
}

export function orderPerScoreAscendent(payload){
    return{
        type: 'ORDER_SCORE',
        payload
    }
}

export function orderPerScoreDesendent(payload){
    return{
        type: 'OTHER_ORDER_SCORE',
        payload
    }
}

export function getDiets() {
    return async function(dispatch) {
        try {
            let info = await axios.get('http://localhost:3001/diets', {
            });
            return dispatch({
                type: 'GET_DIETS',
                payload: info.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function addRecipe(payload) {
    return async function(dispatch) {
        let response = axios.post('http://localhost:3001/recipes', payload)
        console.log(response);
        return response
    }
}

export function getDetail(id) {
        return async function (dispatch) {
            let json = await axios.get('http://localhost:3001/recipes/' + id)
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })   
    }
}