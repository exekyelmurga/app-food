const initialState = {
    recipes: [],
    allRecipes: [],
    diets: [],
    details: []
}


function rootRecuder (state = initialState, action) {
    if (action.type === 'GET_RECIPES') {
        return {
            ...state,
            recipes: action.payload,
            allRecipes: action.payload,
        }
    }
    

    else if (action.type === 'GET_RECIPES_NAME') {
        return {
            ...state,
            recipes: action.payload
        }
    }


    else if ( action.type === 'GET_RECIPE_BY_DIET') {
        const allRecipes = state.allRecipes
        const dietFiltered = []
        for (let i = 0; i < allRecipes.length; i++) {
            let diets = allRecipes[i].diets
            let input = action.payload
            if(typeof diets === 'object') {
                for (const diet of diets) {
                    if(diet.name === input) {
                        dietFiltered.push(allRecipes[i])
                    }
                }
            } else break
        }
        const lasOtras = allRecipes.filter(el => el.diets.includes(action.payload))
        
        let todas = [...dietFiltered, ...lasOtras]
        if(lasOtras.length) console.log('tengo algo');
        return{
            ...state,
            recipes: todas
        }
    }
    
    else if (action.type === 'ORDER_SORT') {
        const ordenado = action.payload === 'mayormenor' ?
        state.recipes.sort (function (a, b) {
            if (a.name > b.name) {
                return 1
            }
            if (b.name > a.name) {
                return -1
            }
            return 0
        }) : 
        state.recipes.sort ( function (a, b) {
            if (a.name > b.name) {
                return -1
            }
            if (b.name > a.name) {
                return 1
            }
            return 0
        })
        return {
            ...state,
            recipes: ordenado
        }
    }

    else if (action.type === 'ORDER_SCORE') {
        if (action.payload === 'menormayor') {
            console.log(state.recipes);
            const HSordenado =
            state.recipes.sort (function (a, b) {
                if (a.HS > b.HS) {
                    return 1
                }
                if (b.HS > a.HS) {
                    return -1
                }
                return 0
            }) 
            return {
                ...state,
                recipes: HSordenado
            }
        }
    }

    else if (action.type === 'OTHER_ORDER_SCORE') {
        if(action.payload === 'mayormenor') {
            const ordenado = 
            state.recipes.sort ( function (a, b) {
                if (a.HS > b.HS) {
                    return -1
                }
                if (b.HS > a.HS) {
                    return 1
                }
                return 0
            })
            return {
                ...state,
                recipes: ordenado
            }
        }
}
    else if (action.type === 'GET_DIETS') {
        return {
            ...state,
            diets: action.payload
        }
    } 

    else if (action.type === 'ADD_RECIPE') {
        return {
            ...state,
        }
    }
    
    else if (action.type === 'GET_DETAIL') {
        return {
            ...state,
            details: action.payload
        }
    }

    else {
        return {
            ...state}
        }
}

export default rootRecuder;