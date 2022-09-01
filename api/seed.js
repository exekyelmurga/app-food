const { Diet} = require ('./src/db')

var glutenFree = Diet.create({
    id: 1,
    name: 'gluten free'
    });

var ketogenic = Diet.create ({
    id: 2,
    name: 'ketogenic'
});

var LactoOvoVegetarian = Diet.create ({
    id: 4,
    name: 'lacto ovo vegetarian'
});

var vegan = Diet.create ({
    id: 6,
    name: 'vegan'
});

var pescentarian = Diet.create ({
    id: 7,
    name: 'pescatarian'
});

var paleo = Diet.create ({
    id: 8,
    name: 'paleolithic'
});

var primal = Diet.create ({
    id: 9,
    name: 'primal'
});

var fodmap = Diet.create ({
    id: 10,
    name: 'fodmap friendly'
});

var whole30 = Diet.create ({
    id: 11,
    name: 'whole 30'
});

var dairyFree = Diet.create ({
    id: 12,
    name: 'dairy free'
})

Promise.all([glutenFree, ketogenic, LactoOvoVegetarian, vegan, pescentarian, paleo, primal, fodmap, whole30, dairyFree])
.then( res => console.log( 'Dietas Precargadas con exito'))
