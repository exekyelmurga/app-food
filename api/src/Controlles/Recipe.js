const {Recipe, Diet } = require ('../db.js')
const axios = require ('axios'); 
const { Op } = require('sequelize')
const { API_KEY } = process.env;



    const getRecipes = async (req, res, next) => {
        let {name} = req.query
        let ApiRecipe;
        let MyRecipe;
        if(name) {
            let Api = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&query=${name}&number=99&apiKey=${API_KEY}`)
            let MyRecipe = await Recipe.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                }
            })
            let ApiRecipe = Api.data.results.map(recipe => {
                return {
                    id: recipe.id,
                    name: recipe.title,
                    img: recipe.image,
                    diets: recipe.diets,
                    HS: recipe.healthScore
                }
            })
            const allRecipes = [...MyRecipe, ...ApiRecipe]  //, ...ApiRecipe esto va despues del ...myrecipe
            res.send(allRecipes)
            
            
        } else {
            MyRecipe = await Recipe.findAll({
                attributes: ['id', 'name', 'img', 'resume', 'HS', 'steps'],
                include: {
                    model: Diet,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }
            })
            let Api = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=99&apiKey=${API_KEY}`))
            ApiRecipe = Api.data.results.map (recipe => {
                return {
                    id: recipe.id,
                    name: recipe.title,
                    img: recipe.image,
                    diets: recipe.diets,
                    HS: recipe.healthScore
                }
            })
            const allRecipes = [...MyRecipe, ...ApiRecipe] //, ...ApiRecipe esto va al lado de ...myrecipe
            res.send (allRecipes)
        }
    }

    const getById = async (req, res, next) => {
        let {id} = req.params
        try {
            if (id > 0 ) {
                console.log('Llegue0');
                var ApiRecipe = await axios.get (`https://api.spoonacular.com/recipes/${Number(id)}/information?apiKey=${API_KEY}`)
                return res.json ({
                    id: ApiRecipe.data.id,
                    name: ApiRecipe.data.title,
                    resume: ApiRecipe.data.summary.replace(/<[^>]*>?/g, ""),
                    img: ApiRecipe.data.image,
                    score: ApiRecipe.data.spoonacularScore,
                    HS: ApiRecipe.data.healthScore,
                    diets: ApiRecipe.data.diets?.map(el => el[0].toUpperCase() + el.slice(1) + ' '),
                    steps: ApiRecipe.data.analyzedInstructions.map(el => el.steps.map(e => e.step)),
                    dishTypes: ApiRecipe.data.dishTypes?.map(el => el[0].toUpperCase() + el.slice(1) + ' ')
                })
            } else {
                console.log('Llegue1');
                return await Recipe.findByPk(id, {
                    include: Diet,
                })
                .then ( (recipe) => res.send (recipe))
            }
        } catch (error) {
            next(error)
        }
    }



module.exports = {getRecipes, getById};