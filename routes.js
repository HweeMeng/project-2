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
    const tweetsControllerCallbacks = require('./controllers/expensetracker')(allModels);

    app.get('/', tweetsControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);

};