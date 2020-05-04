module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
    const expenseControllerCallbacks = require('./controllers/expensetracker')(allModels);

    app.get('/', expenseControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);

    app.get('/register', expenseControllerCallbacks.register);

    app.post('/register', expenseControllerCallbacks.registerForm);

    app.post('/login', expenseControllerCallbacks.login);

    app.get('/landing', expenseControllerCallbacks.landing);

    app.get('/add', expenseControllerCallbacks.addPage);

    app.post('/add', expenseControllerCallbacks.add);

    app.get('/monthly', expenseControllerCallbacks.monthly);

    app.get('/newcat', expenseControllerCallbacks.newCatPage);

    app.post('/newcat', expenseControllerCallbacks.newCat);

    app.get('/weekly', expenseControllerCallbacks.weekly);

    app.get('/regcat', expenseControllerCallbacks.regcatPage);

    app.get('/lastmonth', expenseControllerCallbacks.lastmonth);
};