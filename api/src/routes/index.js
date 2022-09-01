const { Router } = require('express');
const {v4: uuidv4} = require ('uuid')
const {Recipe, Diet } = require ('../db.js')
const { getRecipes, getById}= require ('../Controlles/Recipe.js')
const router = Router();

router.get ('/recipes', getRecipes)
router.get ('/recipes/:id', getById)
router.get('/diets', async (req, res, next) => {
    const diets =  await Diet.findAll();
    res.json(diets);
});
router.post ('/recipes', async (req, res, next) => {
    try {
        const {name, img, resume, score, HS, steps, diets} = req.body
        Number(score, HS)
        let RecipeCreated = await Recipe.create ({
            id: uuidv4(),
            name,
            img,
            resume,
            score,
            HS,
            steps
        })
        let dietsDb = await Diet.findAll ({
            where: {
                name: diets
            }
        })
        await RecipeCreated.addDiet(dietsDb)
        res.send ('Created Succesfully')
        
    } catch (error) {
        next (error)   
    }
})




module.exports = router;
