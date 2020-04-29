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
};